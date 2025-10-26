/* external import */
const express = require("express");

/* middleware imports */
const upload = require("../middleware/upload.middleware");
const verifyAdmin = require("../middleware/verifyAdmin.middleware");

/* internal import */
const userController = require("../controllers/user.controller");
const authorize = require("../middleware/authorize.middleware");

/* router level connection */
const router = express.Router();

/* router methods integration */

// sign up an user
router.post(
  "/sign-up-phone",
  userController.signUpWithPhone
);

router.post(
  "/sign-up-google",
  userController.signUpWithGoogle
);

router.post(
  "/verify-phone",
  userController.verifyPhone
);

// login persistance
router.get("/me", verifyAdmin,  userController.persistLogin);

// get all users
router.get(
  "/all-users",
  verifyAdmin,
  authorize("superAdmin"),
  userController.getUsers
);

// get single user
router.get(
  "/get-user/:id",
  verifyAdmin,
  authorize("superAdmin"),
  userController.getUser
);

// update user information
router.patch(
  "/update-information",
  verifyAdmin,
  authorize("superAdmin", "admin"),
  upload("avatar").single("avatar"),
  userController.updateUser
);

router.patch(
  "/update-user/:id",
  verifyAdmin,
  authorize("superAdmin", "admin"),
  upload("avatar").single("avatar"),
  userController.updateUserInfo
);

// delete user information
router.delete(
  "/delete-user/:id",
  verifyAdmin,
  authorize("superAdmin", "admin"),
  userController.deleteUser
);

/* export user router */
module.exports = router;
