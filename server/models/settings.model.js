const mongoose = require("mongoose");
const Counter = require("./counter");

const settingsSchema = new mongoose.Schema({
    settingId: {
        type: Number,
        unique: true,
    },
    key: {
        type: String,
        required: [true, "لطفا  کلید درست انتخاب کنید"],
        trim: true,
    },
    value: {
        type: String,
        default: "000",
        trim: true,
    },
    type: {
        type: String,
        required: [true, "لطفا شهر را وارد کنید"],
        enum: ['number', 'string'],
        trim: true,
    },
    name: {
        type: String,
        required: [true, "لطفا نام را وارد کنید"]
    }
}, { timestamps: true });


settingsSchema.pre("save", async function (next) {
    if (!this.isNew || this.settingId) {
        return next();
    }

    try {
        const counter = await Counter.findOneAndUpdate(
            { name: "settingId" },
            { $inc: { seq: 1 } },
            { new: true, upsert: true }
        );
        this.settingId = counter.seq;
        next();
    } catch (error) {
        next(error);
    }
});

const Settings = mongoose.model("Settings", settingsSchema);
module.exports = Settings;
