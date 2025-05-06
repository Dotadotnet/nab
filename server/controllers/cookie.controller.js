/* internal import */
const cookieService = require("../services/cookie.service");

/* add new blog */
exports.setCookie = async (req, res, next) => {
    try {
        await cookieService.setCookie(req, res);
    } catch (error) {
        next(error);
    } finally {
        console.log(`Route: ${req.url} || Method: ${req.method}`);
    }
};

/* get all blogs */
exports.getCookie = async (req, res, next) => {
    try {
        await cookieService.getCookie(req, res);
    } catch (error) {
        next(error);
    } finally {
        console.log(`Route: ${req.url} || Method: ${req.method}`);
    }
};


/* delete blog */
exports.deleteCookie = async (req, res, next) => {
    try {
        await cookieService.deleteCookie(req, res);
    } catch (error) {
        next(error);
    } finally {
        console.log(`Route: ${req.url} || Method: ${req.method}`);
    }
};
