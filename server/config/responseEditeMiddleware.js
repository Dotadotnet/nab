const Translation = require("../models/translation.model");


module.exports = class responseEdite {
    targetFild = "translations";
    constructor(OrginalResponse, req) {
        this.data = OrginalResponse;
        this.req = req;
        this.lang = this.req.cookies.NEXT_LOCALE ? this.req.cookies.NEXT_LOCALE : "fa";
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
        let result = modelObject;
        if (result[this.targetFild] && result[this.targetFild][0]["translation"]) {
            for (let i = 0; i < result[this.targetFild].length; i++) {
                let translated = await Translation.findById(result[this.targetFild][i]["translation"]);
                result[this.targetFild][i] = translated.fields;
                if (translated.language == this.lang) {
                    for (const [key, value] of Object.entries(Object.fromEntries(translated.fields))) {
                        result[key] = value;
                    }
                }
            }
        }
        return result;
    }





}
