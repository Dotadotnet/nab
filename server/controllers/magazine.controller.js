/* internal import */
const magazineService = require("../services/magazine.service");

/* add new magazine */
exports.addMagazine = async (req, res, next) => {
  try {
    await magazineService.addMagazine(req, res);
  } catch (error) {
    next(error);
  } finally {
    console.log(`Route: ${req.url} || Method: ${req.method}`);
  }
};

/* get all magazines */
exports.getMagazines = async (req, res, next) => {
  try {
    await magazineService.getMagazines(req, res);
  } catch (error) {
    next(error);
  } finally {
    console.log(`Route: ${req.url} || Method: ${req.method}`);
  }
};

/* get a magazine */
exports.getMagazine = async (req, res, next) => {
  try {
    await magazineService.getMagazine(req, res);
  } catch (error) {
    next(error);
  } finally {
    console.log(`Route: ${req.url} || Method: ${req.method}`);
  }
};

/* update magazine */
exports.updateMagazine = async (req, res, next) => {
  try {
    await magazineService.updateMagazine(req, res);
  } catch (error) {
    next(error);
  } finally {
    console.log(`Route: ${req.url} || Method: ${req.method}`);
  }
};

/* delete magazine */
exports.deleteMagazine = async (req, res, next) => {
  try {
    await magazineService.deleteMagazine(req, res);
  } catch (error) {
    next(error);
  } finally {
    console.log(`Route: ${req.url} || Method: ${req.method}`);
  }
};