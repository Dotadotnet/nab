const Translation = require("../models/translation.model");
const { normalizeLanguage } = require("../utils/languages");

const EXCLUDED_TRANSLATION_KEYS = new Set([
    "_id",
    "__v",
    "id",
    "language",
    "article",
    "campaign",
    "category",
    "country",
    "city",
    "featuredProduct",
    "newsType",
    "product",
    "promoBanner",
    "story",
    "tag",
    "unit",
    "venue",
    "createdAt",
    "updatedAt"
]);

const getTranslationFields = (translation) => {
    if (!translation) return {};

    const raw = typeof translation.toObject === "function"
        ? translation.toObject()
        : translation;

    const fields = raw.fields instanceof Map
        ? Object.fromEntries(raw.fields)
        : raw.fields;

    if (fields && typeof fields === "object") {
        return fields;
    }

    return Object.entries(raw).reduce((result, [key, value]) => {
        if (!EXCLUDED_TRANSLATION_KEYS.has(key)) {
            result[key] = value;
        }
        return result;
    }, {});
};

module.exports = class responseEdite {
    targetFild = "translations";
    constructor(OrginalResponse, req) {
        this.data = OrginalResponse;
        this.req = req;
        this.lang = normalizeLanguage(
            this.req.locale ||
            this.req.headers["x-lang"] ||
            this.req.cookies?.NEXT_LOCALE ||
            this.req.headers["accept-language"]
        );
    }

    async getResult() {
        // اگه استرینگ بود خودش رو برمیگردونه
        try {
            let result = JSON.parse(this.data);
        } catch (error) {
            return this.data;
        }
        // اگه استرینگ بود خودش رو برمیگردونه
        let result = JSON.parse(this.data);
        if (result[this.targetFild]) {
            // اگر آبجکت مول مستقیم اومده بود
            result = await this.treanslateObjectModel(result);
            // اگر آبجکت مول مستقیم اومده بود
        } else {
            await this.visit(result)
        }
        return JSON.stringify(result);
    }

    async visit(data) {
        if (!data || typeof data !== "object") {
            return;
        }

        if (Array.isArray(data)) {
            for (let i = 0; i < data.length; i++) {
                if (data[i] && typeof data[i] === "object") {
                    if (data[i][this.targetFild]) {
                        data[i] = await this.treanslateObjectModel(data[i])
                    } else {
                        await this.visit(data[i]);
                    }
                }
            }
        } else {
            for (const [key, value] of Object.entries(data)) {
                if (value && typeof value === "object") {
                    if (value[this.targetFild]) {
                        data[key] = await this.treanslateObjectModel(data[key])
                    } else {
                        await this.visit(value);
                    }
                }
            }
        }
    }

    async treanslateObjectModel(modelObject) {
        let result = modelObject;
        if (result[this.targetFild]?.length && result[this.targetFild][0]["translation"]) {
            for (let i = 0; i < result[this.targetFild].length; i++) {
                const translationRef = result[this.targetFild][i]["translation"];
                let translated = typeof translationRef === "object"
                    ? translationRef
                    : await Translation.findById(translationRef);
                const translatedFields = getTranslationFields(translated);
                result[this.targetFild][i] = translatedFields;
                if (translated?.language == this.lang) {
                    for (const [key, value] of Object.entries(translatedFields || {})) {
                        result[key] = value;
                    }
                }
            }
        }
        return result;
    }





}
