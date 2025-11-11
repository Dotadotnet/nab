/* external import */
const express = require("express");

/* middleware imports */
const upload = require("../middleware/upload.middleware");

/* internal import */
const magazineController = require("../controllers/magazine.controller");
const verify = require("../middleware/verifyAdmin.middleware");
const authorize = require("../middleware/authorize.middleware");

/* router level connection */
const router = express.Router();

/* router methods integration */

// add new magazine
router.post(
  "/add-magazine",
  verify,
  authorize("superAdmin", "admin"),
  upload('magazine').fields([
    { name: "thumbnail", maxCount: 1 },
    { name: "gallery", maxCount: 10 },
  ]),
  magazineController.addMagazine
);

// get all magazines with pagination and filtering
router.get("/get-magazines", magazineController.getMagazines);

// get a magazine
router.get("/get-magazine/:id", magazineController.getMagazine);

// update magazine
router.patch(
  "/update-magazine/:id",
  verify,
  authorize("superAdmin", "admin"),
  upload('magazine').fields([
    { name: "thumbnail", maxCount: 1 },
    { name: "gallery", maxCount: 10 },
  ]),
  magazineController.updateMagazine
);

// delete magazine
router.delete(
  "/delete-magazine/:id",
  verify,
  authorize("superAdmin", "admin"),
  magazineController.deleteMagazine
);

module.exports = router;