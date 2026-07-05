const cheerio = require("cheerio");
const { translateWithFallback } = require("./googleTranslate.util");
const {
  DEFAULT_LANGUAGE,
  SUPPORTED_LANGUAGES,
  normalizeLanguage
} = require("./languages");

const MAX_CHUNK_SIZE = 4500;

const splitText = (text, max = MAX_CHUNK_SIZE) => {
  const parts = [];
  for (let i = 0; i < text.length; i += max) {
    parts.push(text.slice(i, i + max));
  }
  return parts;
};

async function translateHTMLContent(html, lang, toLowerCase = false) {
  const $ = cheerio.load(html, { decodeEntities: false });

  async function translateNode(node) {
    if (node.type === "text") {
      const original = node.data.trim();
      if (original) {
        try {
          const chunks = splitText(original);
          const translatedChunks = await Promise.all(
            chunks.map(async (chunk) => {
              const result = await translateWithFallback(chunk, { to: lang });
              return toLowerCase ? result.text.toLowerCase() : result.text;
            })
          );
          node.data = translatedChunks.join(" ");
        } catch (err) {
          console.error("خطا در ترجمه:", err.message);
        }
      }
    } else if (node.type === "tag") {
      for (const child of node.children || []) {
        await translateNode(child);
      }
    }
  }

  const body = $("body").length ? $("body")[0] : $.root()[0];
  for (const node of body.children) {
    await translateNode(node);
  }

  return $.html();
}

const translateFields = async (
  data,
  {
    stringFields = [],
    arrayStringFields = [],
    arrayObjectFields = [],
    longTextFields = [],
    lowercaseFields = [],
    copyFields = [],
  },
  languages = SUPPORTED_LANGUAGES.filter((lang) => lang !== DEFAULT_LANGUAGE)
) => {
  const translations = {};
  const targetLanguages = [...new Set(languages.map(normalizeLanguage))]
    .filter((lang) => lang !== DEFAULT_LANGUAGE);

  translations[DEFAULT_LANGUAGE] = { fields: {} };

  // پردازش فیلدهای مختلف برای زبان اصلی (fa)
  for (const field of stringFields) {
    if (typeof data[field] === "string") {
      translations[DEFAULT_LANGUAGE].fields[field] = data[field];
    }
  }

  for (const field of arrayStringFields) {
    if (Array.isArray(data[field])) {
      translations[DEFAULT_LANGUAGE].fields[field] = [...data[field]];
    }
  }

  for (const field of arrayObjectFields) {
    if (Array.isArray(data[field])) {
      translations[DEFAULT_LANGUAGE].fields[field] = data[field].map((item) =>
        item && typeof item === "object" ? { ...item } : item
      );
    }
  }

  for (const field of longTextFields) {
    if (typeof data[field] === "string") {
      translations[DEFAULT_LANGUAGE].fields[field] = data[field];
    }
  }

  for (const field of lowercaseFields) {
    if (typeof data[field] === "string") {
      translations[DEFAULT_LANGUAGE].fields[field] = data[field];
    }
  }

  for (const field of copyFields) {
    if (data[field] !== undefined) {
      translations[DEFAULT_LANGUAGE].fields[field] = data[field];
    }
  }

  // ترجمه به سایر زبان‌ها
  for (const lang of targetLanguages) {
    translations[lang] = { fields: {} };

    // ترجمه رشته‌های ساده
    for (const field of stringFields) {
      const value = data[field];
      if (typeof value === "string") {
        try {
          const result = await translateWithFallback(value, { to: lang });
          translations[lang].fields[field] = result.text;
        } catch (err) {
          throw new Error(`خطا در ترجمه فیلد "${field}" به ${lang}: ${err.message}`);
        }
      }
    }

    // ترجمه آرایه‌های رشته‌ای
    for (const field of arrayStringFields) {
      const value = data[field];
      if (Array.isArray(value)) {
        translations[lang].fields[field] = await Promise.all(
          value.map(async (item) =>
            typeof item === "string"
              ? (await translateWithFallback(item, { to: lang })).text
              : item
          )
        );
      }
    }

    // ترجمه آرایه‌های شیء
    for (const field of arrayObjectFields) {
      const value = data[field];
      if (Array.isArray(value)) {
        translations[lang].fields[field] = await Promise.all(
          value.map(async (item) => {
            if (item && typeof item === "object") {
              const translatedItem = {};
              for (const [key, val] of Object.entries(item)) {
                if (typeof val === "string") {
                  translatedItem[key] = (await translateWithFallback(val, { to: lang })).text;
                } else if (Array.isArray(val)) {
                  translatedItem[key] = await Promise.all(
                    val.map(async (subItem) =>
                      typeof subItem === "string"
                        ? (await translateWithFallback(subItem, { to: lang })).text
                        : subItem
                    )
                  );
                } else {
                  translatedItem[key] = val;
                }
              }
              return translatedItem;
            }
            return item;
          })
        );
      }
    }

    // ترجمه متن‌های بلند (HTML)
    for (const field of longTextFields) {
      const value = data[field];
      if (typeof value === "string") {
        try {
          const translatedHTML = await translateHTMLContent(value, lang);
          translations[lang].fields[field] = translatedHTML;
        } catch (err) {
          throw new Error(`خطا در ترجمه متن بلند "${field}" به ${lang}: ${err.message}`);
        }
      }
    }

    // ترجمه فیلدهای lowercase
    for (const field of lowercaseFields) {
      const value = data[field];
      if (typeof value === "string") {
        try {
          const result = await translateWithFallback(value, { to: lang });
          translations[lang].fields[field] = result.text.toLowerCase();
        } catch (err) {
          throw new Error(`خطا در ترجمه فیلد lowercase "${field}" به ${lang}: ${err.message}`);
        }
      }
    }

    for (const field of copyFields) {
      if (data[field] !== undefined) {
        translations[lang].fields[field] = data[field];
      }
    }
  }

  return translations;
};

module.exports = translateFields;
