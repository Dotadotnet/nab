const Ticket = require("../models/ticket.model");
const ChatMessage = require("../models/chatMessage.model");
const AppNotification = require("../models/appNotification.model");
const Admin = require("../models/admin.model");

const notifyAdmins = async ({ type, title, body, data = {} }) => {
  const admins = await Admin.find({
    role: { $in: ["admin", "superAdmin", "operator"] },
    status: "active",
    isDeleted: false
  }).select("_id");

  if (!admins.length) return;

  await AppNotification.insertMany(
    admins.map((admin) => ({
      recipient: admin._id,
      recipientModel: "Admin",
      type,
      title,
      body,
      data
    }))
  );
};

exports.createTicket = async (req, res) => {
  try {
    const { subject, body, relatedOrder, priority } = req.body;

    const ticket = await Ticket.create({
      subject,
      customer: req.user._id,
      relatedOrder,
      priority
    });

    const message = await ChatMessage.create({
      ticket: ticket._id,
      sender: req.user._id,
      senderModel: "User",
      body
    });

    await notifyAdmins({
      type: "ticket_created",
      title: "تیکت جدید",
      body: subject,
      data: {
        ticket: ticket._id,
        ticketId: ticket.ticketId
      }
    });

    res.status(201).json({
      acknowledgement: true,
      message: "Created",
      description: "تیکت با موفقیت ثبت شد",
      data: {
        ticket,
        message
      }
    });
  } catch (error) {
    res.status(500).json({
      acknowledgement: false,
      message: "Error",
      description: error.message
    });
  }
};

exports.getAdminTickets = async (req, res) => {
  try {
    const { page = 1, limit = 20, status, search = "" } = req.query;
    const skip = (Number(page) - 1) * Number(limit);

    const query = {
      isDeleted: false,
      ...(status && status !== "all" ? { status } : {})
    };

    if (search) {
      query.$or = [
        { ticketId: { $regex: search, $options: "i" } },
        { subject: { $regex: search, $options: "i" } }
      ];
    }

    const tickets = await Ticket.find(query)
      .sort({ lastMessageAt: -1, createdAt: -1 })
      .skip(skip)
      .limit(Number(limit))
      .populate("customer", "name phone email userId")
      .populate("assignedAdmin", "name email role")
      .populate("relatedOrder", "orderId orderStatus");

    const total = await Ticket.countDocuments(query);

    res.status(200).json({
      acknowledgement: true,
      message: "Ok",
      description: "تیکت‌ها با موفقیت دریافت شدند",
      data: tickets,
      total
    });
  } catch (error) {
    res.status(500).json({
      acknowledgement: false,
      message: "Error",
      description: error.message
    });
  }
};

exports.getUserTickets = async (req, res) => {
  try {
    const tickets = await Ticket.find({
      customer: req.user._id,
      isDeleted: false
    })
      .sort({ lastMessageAt: -1, createdAt: -1 })
      .populate("assignedAdmin", "name role")
      .populate("relatedOrder", "orderId orderStatus");

    res.status(200).json({
      acknowledgement: true,
      message: "Ok",
      description: "تیکت‌های شما با موفقیت دریافت شدند",
      data: tickets
    });
  } catch (error) {
    res.status(500).json({
      acknowledgement: false,
      message: "Error",
      description: error.message
    });
  }
};

exports.getMessages = async (req, res) => {
  try {
    const ticket = await Ticket.findById(req.params.ticketId);

    if (!ticket) {
      return res.status(404).json({
        acknowledgement: false,
        message: "Not Found",
        description: "تیکت پیدا نشد"
      });
    }

    if (req.user && String(ticket.customer) !== String(req.user._id)) {
      return res.status(403).json({
        acknowledgement: false,
        message: "Forbidden",
        description: "دسترسی به این تیکت مجاز نیست"
      });
    }

    const messages = await ChatMessage.find({
      ticket: ticket._id,
      isDeleted: false
    })
      .sort({ createdAt: 1 })
      .populate("sender", "name phone email role");

    res.status(200).json({
      acknowledgement: true,
      message: "Ok",
      description: "پیام‌ها با موفقیت دریافت شدند",
      data: {
        ticket,
        messages
      }
    });
  } catch (error) {
    res.status(500).json({
      acknowledgement: false,
      message: "Error",
      description: error.message
    });
  }
};

exports.sendAdminMessage = async (req, res) => {
  try {
    const { body } = req.body;
    const ticket = await Ticket.findById(req.params.ticketId);

    if (!ticket) {
      return res.status(404).json({
        acknowledgement: false,
        message: "Not Found",
        description: "تیکت پیدا نشد"
      });
    }

    const message = await ChatMessage.create({
      ticket: ticket._id,
      sender: req.admin._id,
      senderModel: "Admin",
      body
    });

    ticket.assignedAdmin = ticket.assignedAdmin || req.admin._id;
    ticket.status = "pending_user";
    ticket.lastMessageAt = new Date();
    await ticket.save();

    await AppNotification.create({
      recipient: ticket.customer,
      recipientModel: "User",
      type: "message_created",
      title: "پاسخ پشتیبانی",
      body,
      data: {
        ticket: ticket._id,
        ticketId: ticket.ticketId
      }
    });

    res.status(201).json({
      acknowledgement: true,
      message: "Created",
      description: "پیام با موفقیت ارسال شد",
      data: message
    });
  } catch (error) {
    res.status(500).json({
      acknowledgement: false,
      message: "Error",
      description: error.message
    });
  }
};

exports.sendUserMessage = async (req, res) => {
  try {
    const { body } = req.body;
    const ticket = await Ticket.findById(req.params.ticketId);

    if (!ticket || String(ticket.customer) !== String(req.user._id)) {
      return res.status(404).json({
        acknowledgement: false,
        message: "Not Found",
        description: "تیکت پیدا نشد"
      });
    }

    const message = await ChatMessage.create({
      ticket: ticket._id,
      sender: req.user._id,
      senderModel: "User",
      body
    });

    ticket.status = "pending_admin";
    ticket.lastMessageAt = new Date();
    await ticket.save();

    await notifyAdmins({
      type: "message_created",
      title: "پیام جدید کاربر",
      body,
      data: {
        ticket: ticket._id,
        ticketId: ticket.ticketId
      }
    });

    res.status(201).json({
      acknowledgement: true,
      message: "Created",
      description: "پیام با موفقیت ارسال شد",
      data: message
    });
  } catch (error) {
    res.status(500).json({
      acknowledgement: false,
      message: "Error",
      description: error.message
    });
  }
};

exports.closeTicket = async (req, res) => {
  try {
    const ticket = await Ticket.findByIdAndUpdate(
      req.params.ticketId,
      {
        status: "closed",
        closedAt: new Date()
      },
      { new: true }
    );

    if (!ticket) {
      return res.status(404).json({
        acknowledgement: false,
        message: "Not Found",
        description: "تیکت پیدا نشد"
      });
    }

    res.status(200).json({
      acknowledgement: true,
      message: "Ok",
      description: "تیکت بسته شد",
      data: ticket
    });
  } catch (error) {
    res.status(500).json({
      acknowledgement: false,
      message: "Error",
      description: error.message
    });
  }
};

exports.notifyAdmins = notifyAdmins;
