const SUPPORTED_LANGUAGES = ["fa", "en", "tr", "ar"];
const DEFAULT_LANGUAGE = "fa";

const normalizeLanguage = (language) => {
  const normalized = String(language || DEFAULT_LANGUAGE)
    .split(",")[0]
    .split("-")[0]
    .trim()
    .toLowerCase();

  return SUPPORTED_LANGUAGES.includes(normalized)
    ? normalized
    : DEFAULT_LANGUAGE;
};

module.exports = {
  SUPPORTED_LANGUAGES,
  DEFAULT_LANGUAGE,
  normalizeLanguage
};
