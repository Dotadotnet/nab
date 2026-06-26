const buildTranslationDocs = (translations, refField, refId) =>
  Object.entries(translations).map(([language, { fields }]) => ({
    language,
    [refField]: refId,
    ...fields
  }));

const buildTranslationInfos = (translations) =>
  translations.map((translation) => ({
    translation: translation._id,
    language: translation.language
  }));

module.exports = {
  buildTranslationDocs,
  buildTranslationInfos
};
