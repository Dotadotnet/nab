const { translateWithFallback } = require("../utils/googleTranslate.util");
const {
  normalizeLanguage,
  DEFAULT_LANGUAGE
} = require("../utils/languages");

exports.translateText = async (req, res) => {
  try {
    const { text, to = "en" } = req.body;
    const targetLanguage = normalizeLanguage(to);

    if (!text || typeof text !== "string" || text.trim().length < 2) {
      return res.status(400).json({
        acknowledgement: false,
        message: "Bad Request",
        description: "متن برای ترجمه معتبر نیست"
      });
    }

    const result = await translateWithFallback(text.trim(), {
      to: targetLanguage === DEFAULT_LANGUAGE ? "en" : targetLanguage
    });

    return res.status(200).json({
      acknowledgement: true,
      message: "OK",
      description: "ترجمه با موفقیت انجام شد",
      data: {
        text: result.text
      }
    });
  } catch (error) {
    console.error("[TRANSLATE] failed", {
      message: error.message,
      status: error.cause?.response?.status,
      statusText: error.cause?.response?.statusText
    });

    return res.status(500).json({
      acknowledgement: false,
      message: "Translation Error",
      description: "خطا در ترجمه خودکار",
      error: error.message
    });
  }
};
