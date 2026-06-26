const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema.Types;

const sessionSchema = new mongoose.Schema(
  {
    sessionId: {
      type: String,
      required: true,
      unique: true
    },
    userId: {
      type: String,
      required: true
    },
    
    reviews: [
      {
        type: ObjectId,
        ref: "Review"
      }
    ],
    visitCount: {
      type: Number,
      default: 1
    },
    cart: [
      {
        type: ObjectId,
        ref: "Cart",
      },
    ],
    role: {
      type: String,
      default: "buyer"
    },
    ip: String,
    forwardedFor: String,
    userAgent: String,
    language: String,
    timezone: String,
    referrer: String,
    landingPage: String,
    lastPage: String,
    firstSeenAt: Date,
    lastSeenAt: Date,
    totalDurationMs: {
      type: Number,
      default: 0
    },
    pageViewCount: {
      type: Number,
      default: 0
    },
    location: {
      country: String,
      countryCode: String,
      region: String,
      city: String,
      latitude: Number,
      longitude: Number
    },
    browser: {
      name: String,
      version: String
    },
    os: {
      name: String,
      version: String
    },
    device: {
      type: {
        type: String,
        default: "desktop"
      },
      vendor: String,
      model: String
    },
    screen: {
      width: Number,
      height: Number,
      pixelRatio: Number
    },
    utm: {
      source: String,
      medium: String,
      campaign: String,
      term: String,
      content: String
    },
    pageViews: [
      {
        path: String,
        url: String,
        title: String,
        referrer: String,
        event: String,
        navigationType: String,
        startedAt: Date,
        endedAt: Date,
        durationMs: {
          type: Number,
          default: 0
        },
        createdAt: {
          type: Date,
          default: Date.now
        }
      }
    ]
  },
  { timestamps: true }
);

sessionSchema.methods.incrementVisitCount = async function () {
  this.visitCount += 1;
  await this.save();
};

// جلوگیری از OverwriteModelError
module.exports = mongoose.models.Session || mongoose.model("Session", sessionSchema);
