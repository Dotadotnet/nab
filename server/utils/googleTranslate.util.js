const { translate } = require("google-translate-api-x");

const translateWithFallback = async (text, options = {}) => {
  try {
    return await translate(text, options);
  } catch (error) {
    console.warn("[TRANSLATE] default client failed, retrying with gtx", {
      message: error.message,
      status: error.cause?.response?.status,
      statusText: error.cause?.response?.statusText
    });

    return translate(text, {
      ...options,
      client: "gtx"
    });
  }
};

module.exports = {
  translateWithFallback
};
