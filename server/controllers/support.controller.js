const supportService = require("../services/support.service");

exports.createTicket = async (req, res, next) => {
  try {
    await supportService.createTicket(req, res);
  } catch (error) {
    next(error);
  }
};

exports.getAdminTickets = async (req, res, next) => {
  try {
    await supportService.getAdminTickets(req, res);
  } catch (error) {
    next(error);
  }
};

exports.getUserTickets = async (req, res, next) => {
  try {
    await supportService.getUserTickets(req, res);
  } catch (error) {
    next(error);
  }
};

exports.getMessages = async (req, res, next) => {
  try {
    await supportService.getMessages(req, res);
  } catch (error) {
    next(error);
  }
};

exports.sendAdminMessage = async (req, res, next) => {
  try {
    await supportService.sendAdminMessage(req, res);
  } catch (error) {
    next(error);
  }
};

exports.sendUserMessage = async (req, res, next) => {
  try {
    await supportService.sendUserMessage(req, res);
  } catch (error) {
    next(error);
  }
};

exports.closeTicket = async (req, res, next) => {
  try {
    await supportService.closeTicket(req, res);
  } catch (error) {
    next(error);
  }
};
