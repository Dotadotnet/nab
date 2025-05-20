

/* internal import */
const Setting = require("../models/settings.model");
const remove = require("../utils/remove.util");
const configs = require("../config/setting");

/* get a gallery */
exports.getAll = async (req, res) => {
    const settings = await Setting.find();
    const accepted_keys = []
    for (let j = 0; j < configs.length; j++) {
        const config = configs[j];
        accepted_keys.push(config.key)
        let founded = false;
        let pass_value = config.value;
        for (let i = 0; i < settings.length; i++) {
            const setting_regisered = settings[i];
            if (config.key == setting_regisered.key && config.type == setting_regisered.type && config.name == setting_regisered.name) {
                founded = true;
            } else if (config.key == setting_regisered.key) {
                await Setting.findByIdAndDelete(setting_regisered._id)
                founded = true;
                pass_value = setting_regisered.value;
            }
        }
        if (!founded) {
            await Setting.create({
                key: config.key,
                value: pass_value,
                type: config.type,
                name: config.name
            })
        }
    }


    for (let i = 0; i < settings.length; i++) {
        const setting_regisered = settings[i];
        if (!accepted_keys.includes(setting_regisered.key)) {
            await Setting.findByIdAndDelete(setting_regisered._id)
        }
    }



    const result = await Setting.find();
    res.status(200).json({
        acknowledgement: true,
        message: "Successfully",
        description: "تنظیمات  دریافت شد",
        data: result
    });
};
