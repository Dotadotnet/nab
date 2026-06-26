const express = require("express");
const verifyAdmin = require("../middleware/verifyAdmin.middleware");
const verifyUser = require("../middleware/verifyUser.middleware");
const authorize = require("../middleware/authorize.middleware");
const supportController = require("../controllers/support.controller");

const router = express.Router();

router.post("/tickets", verifyUser, supportController.createTicket);
router.get("/tickets/me", verifyUser, supportController.getUserTickets);
router.get("/tickets", verifyAdmin, authorize("admin", "superAdmin", "operator"), supportController.getAdminTickets);

router.get("/tickets/:ticketId/messages", verifyAdmin, authorize("admin", "superAdmin", "operator"), supportController.getMessages);
router.get("/tickets/:ticketId/messages/me", verifyUser, supportController.getMessages);

router.post("/tickets/:ticketId/messages", verifyAdmin, authorize("admin", "superAdmin", "operator"), supportController.sendAdminMessage);
router.post("/tickets/:ticketId/messages/me", verifyUser, supportController.sendUserMessage);

router.patch("/tickets/:ticketId/close", verifyAdmin, authorize("admin", "superAdmin", "operator"), supportController.closeTicket);

module.exports = router;
