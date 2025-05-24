/* external import */
const express = require("express");

/* middleware imports */
const upload = require("../middleware/upload.middleware");
const verifyUser = require("../middleware/verifyUser.middleware");

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
router.get("/me", verifyUser,  userController.persistLogin);

// get all users
router.get(
  "/all-users",
  verifyUser,
  authorize("superAdmin"),
  userController.getUsers
);

// get single user
router.get(
  "/get-user/:id",
  verifyUser,
  authorize("superAdmin"),
  userController.getUser
);

// update user information
router.patch(
  "/update-information",
  verifyUser,
  authorize("superAdmin", "admin"),
  upload("avatar").single("avatar"),
  userController.updateUser
);

router.patch(
  "/update-user/:id",
  verifyUser,
  authorize("superAdmin", "admin"),
  upload("avatar").single("avatar"),
  userController.updateUserInfo
);

// delete user information
router.delete(
  "/delete-user/:id",
  verifyUser,
  authorize("superAdmin", "admin"),
  userController.deleteUser
);

/* export user router */
module.exports = router;
