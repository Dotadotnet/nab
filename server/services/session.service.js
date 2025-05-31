const Session = require("../models/session.model");
// initialize session

async function initSession(req, res, next) {
  try {
    let  sessionData = await Session.findOne({
      sessionId: req.sessionID
    });
    if (!sessionData) {
      req.session.userId = `guest_${Date.now()}`;
      sessionData = await Session.create({
        sessionId: req.sessionID,
        userId: req.session.userId,
        role: "buyer"
      });
    } else {
      await sessionData.incrementVisitCount();
    }

    res.json({
      sessionId: sessionData.sessionId,
      userId: sessionData.userId,
      role: sessionData.role
    });
  } catch (err) {
    console.error("Error in createSession:", err);
    next(err);
  }
}

// get session
async function getSession(req, res, next) {
  try {
    console.log("req locale", req.locale);
    const sessionData = await Session.findOne({
      sessionId: req.sessionID
    }).populate([
      {
        path: "cart",
        select: "_id quantity",
        populate: [
          {
            path: "product",
            select: "thumbnail discountAmount translations",
            populate: [
              {
                path: "translations.translation",
                match: { language: req.locale },
                select: "fields.title fields.summary fields.slug language"
              },
              {
                path: "category",
                select: "title"
              }
            ]
          },
          {
            path: "variation",
            select: "unit price",
            populate: {
              path: "unit",
              select: "value",
              populate: {
                path: "translations.translation",
                match: { language: req.locale },
                select: "fields.title language"
              }
            }
          }
        ]
      }
    ]);

    if (sessionData && sessionData.cart && sessionData.cart.length > 0) {
      sessionData.cart.forEach((item) => {
        if (
          item.product &&
          item.product.translations &&
          item.product.translations.length > 0
        ) {
          item.product.translations.forEach((translationObj) => {
            console.log(
              "Translation translation field:",
              translationObj.translation
            );
          });
        }
      });
    }

    console.log("sessionData", sessionData);
    if (!sessionData) {
      return res.status(404).json({
        acknowledgement: false,
        message: "یافت نشد",
        description: "نشست فعالی برای شما یافت نشد"
      });
    }

    res.status(200).json({
      acknowledgement: true,
      message: "موفق",
      description: "سیشین با موفقیت دریافت شد",
      data: sessionData
    });
  } catch (err) {
    return res.status(404).json({
      acknowledgement: false,
      message: "یافت نشد",
      description: "نشست فعالی برای شما یافت نشد"
    });
  }
}

// delete session
async function deleteSession(req, res) {
  try {
    const sessionData = await Session.findOneAndDelete({
      sessionId: req.sessionID
    });
    res.json(sessionData || { message: "No session found" });
  } catch (err) {
    next(err);
  }
}

module.exports = {
  initSession,
  getSession,
  deleteSession
};
