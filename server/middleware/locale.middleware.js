const { normalizeLanguage } = require("../utils/languages");

module.exports = (req, res, next) => {
  const requestedLocale =
    req.headers["x-lang"] ||
    req.cookies?.NEXT_LOCALE ||
    (req.headers["accept-language"]
      ? req.headers["accept-language"].split(",")[0].split("-")[0]
      : "fa");

  req.locale = normalizeLanguage(requestedLocale);
  next();
};
