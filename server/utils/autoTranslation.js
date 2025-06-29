const Translation = require("../models/translation.model");


module.exports = class autoTranslation {
    targetFild = "translations";
    constructor(OrginalResponse, req) {


        this.data = OrginalResponse;
        this.req = req;
        this.lang = this.req.cookies.NEXT_LOCALE ? this.req.cookies.NEXT_LOCALE : "fa";
        if (req.headers.panel) {
            this.lang = 'fa';
        }
    }

    async getResult() {
        let result = this.data;
        if (typeof result == "string") {
            // اگه استرینگ بود خودش رو برمیگردونه            
            try {
                let result = JSON.parse(this.data);
            } catch (error) {
                return this.data;
            }
            // اگه استرینگ بود خودش رو برمیگردونه
        }

        if (result[this.targetFild]) {
            // اگر آبجکت مول مستقیم اومده بود

            result = await this.treanslateObjectModel(result);
            // اگر آبجکت مول مستقیم اومده بود
        } else {
            await this.visit(result)
        }

        return result;
    }

    async visit(data) {
        if (typeof data == "object") {
            for (const [key, value] of Object.entries(data)) {
                if (Array.isArray(value) || typeof value == "object") {
                    if (typeof value == "object" && value[this.targetFild]) {
                        data[key] = await this.treanslateObjectModel(data[key])
                    } else {
                        await this.visit(value);
                    }
                }
            }
        } else if (Array.isArray(data)) {
            for (var i = 0; i < data.length; i++) {
                if (Array.isArray(data[i]) || typeof data[i] == "object") {
                    if (typeof data[i] == "object" && data[i][this.targetFild]) {
                        data[i] = await this.treanslateObjectModel(data[i])
                    } else {
                        await this.visit(value);
                    }
                }
            }
        }
    }

    async treanslateObjectModel(modelObject) {
        let object_translate = {};
        if (modelObject[this.targetFild] && modelObject[this.targetFild][0]["translation"]) {
            for (let i = 0; i < modelObject[this.targetFild].length; i++) {
                let translated = await Translation.findById(modelObject[this.targetFild][i]["translation"]);
                object_translate[translated.language] = Object.fromEntries(translated.fields);
            }
        }
        const result = {};
        Object.keys(modelObject._doc).forEach(key => {
            const value = modelObject._doc[key];
            result[key] = value
        });
        Object.keys(object_translate[this.lang]).forEach(key => {
            const value = object_translate[this.lang][key];
            result[key] = value
        });
        result[this.targetFild] = object_translate;
        return result;
    }





}
