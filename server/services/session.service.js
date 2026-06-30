const mongoose = require("mongoose");
const Session = require("../models/session.model");

function getClientIp(req) {
  const forwarded = req.headers["x-forwarded-for"];
  const ip = Array.isArray(forwarded) ? forwarded[0] : forwarded?.split(",")[0];

  return (
    req.headers["cf-connecting-ip"] ||
    req.headers["x-real-ip"] ||
    ip ||
    req.ip ||
    req.socket?.remoteAddress ||
    ""
  ).replace("::ffff:", "");
}

function parseVersion(userAgent, pattern) {
  return userAgent.match(pattern)?.[1] || "";
}

function parseUserAgent(userAgent = "") {
  const ua = userAgent || "";
  const isTablet = /ipad|tablet|playbook|silk/i.test(ua);
  const isMobile = /mobile|iphone|ipod|android.*mobile|windows phone/i.test(ua);

  const browser =
    /edg\//i.test(ua)
      ? { name: "Edge", version: parseVersion(ua, /edg\/([\d.]+)/i) }
      : /opr\//i.test(ua)
        ? { name: "Opera", version: parseVersion(ua, /opr\/([\d.]+)/i) }
        : /firefox\//i.test(ua)
          ? { name: "Firefox", version: parseVersion(ua, /firefox\/([\d.]+)/i) }
          : /chrome\//i.test(ua)
            ? { name: "Chrome", version: parseVersion(ua, /chrome\/([\d.]+)/i) }
            : /safari\//i.test(ua)
              ? { name: "Safari", version: parseVersion(ua, /version\/([\d.]+)/i) }
              : { name: "Unknown", version: "" };

  const os =
    /windows nt/i.test(ua)
      ? { name: "Windows", version: parseVersion(ua, /windows nt ([\d.]+)/i) }
      : /android/i.test(ua)
        ? { name: "Android", version: parseVersion(ua, /android ([\d.]+)/i) }
        : /iphone|ipad|ipod/i.test(ua)
          ? { name: "iOS", version: parseVersion(ua, /os ([\d_]+)/i).replace(/_/g, ".") }
          : /mac os x/i.test(ua)
            ? { name: "macOS", version: parseVersion(ua, /mac os x ([\d_]+)/i).replace(/_/g, ".") }
            : /linux/i.test(ua)
              ? { name: "Linux", version: "" }
              : { name: "Unknown", version: "" };

  return {
    browser,
    os,
    device: {
      type: isTablet ? "tablet" : isMobile ? "mobile" : "desktop"
    }
  };
}

function normalizeDate(value, fallback = new Date()) {
  const date = value ? new Date(value) : fallback;
  return Number.isNaN(date.getTime()) ? fallback : date;
}

function getGeoFromHeaders(req) {
  return {
    country: req.headers["cf-ipcountry-name"] || req.headers["x-vercel-ip-country"] || "",
    countryCode: req.headers["cf-ipcountry"] || req.headers["x-vercel-ip-country"] || "",
    region: req.headers["x-vercel-ip-country-region"] || "",
    city: req.headers["x-vercel-ip-city"] || ""
  };
}

function pickUtm(body = {}) {
  const source = body.utm?.source || body.utm_source;
  const medium = body.utm?.medium || body.utm_medium;
  const campaign = body.utm?.campaign || body.utm_campaign;
  const term = body.utm?.term || body.utm_term;
  const content = body.utm?.content || body.utm_content;

  return { source, medium, campaign, term, content };
}

function pickClick(body = {}) {
  const click = body.click || {};

  return {
    tag: click.tag || "",
    text: click.text || "",
    href: click.href || "",
    id: click.id || "",
    name: click.name || "",
    type: click.type || "",
    role: click.role || "",
    trackingKey: click.trackingKey || ""
  };
}

function buildTrackingData(req) {
  const body = req.body || {};
  const headerUserAgent = req.headers["user-agent"] || "";
  const userAgent = body.userAgent || headerUserAgent;
  const parsed = parseUserAgent(userAgent);
  const now = new Date();
  const startedAt = normalizeDate(body.startedAt, now);
  const durationMs = Math.max(0, Number(body.durationMs) || 0);
  const endedAt = body.endedAt ? normalizeDate(body.endedAt, now) : new Date(startedAt.getTime() + durationMs);
  const geo = getGeoFromHeaders(req);

  return {
    ip: getClientIp(req),
    forwardedFor: req.headers["x-forwarded-for"] || "",
    userAgent,
    language: body.language || req.headers["accept-language"] || "",
    timezone: body.timezone || "",
    referrer: body.referrer || "",
    location: {
      country: body.country || body.location?.country || geo.country,
      countryCode: body.countryCode || body.location?.countryCode || geo.countryCode,
      region: body.region || body.location?.region || geo.region,
      city: body.city || body.location?.city || geo.city,
      latitude: body.latitude || body.location?.latitude,
      longitude: body.longitude || body.location?.longitude
    },
    browser: body.browser || parsed.browser,
    os: body.os || parsed.os,
    device: {
      ...parsed.device,
      ...(body.device || {})
    },
    screen: body.screen || {},
    utm: pickUtm(body),
    pageView: {
      path: body.path || "",
      url: body.url || "",
      title: body.title || "",
      referrer: body.referrer || "",
      event: body.event || "pageview",
      click: pickClick(body),
      navigationType: body.navigationType || "",
      startedAt,
      endedAt,
      durationMs
    }
  };
}

async function ensureSession(req, extra = {}) {
  let sessionData = await Session.findOne({ sessionId: req.sessionID });

  if (!sessionData) {
    req.session.userId = req.session.userId || `guest_${Date.now()}`;
    sessionData = await Session.create({
      sessionId: req.sessionID,
      userId: req.session.userId,
      role: "buyer",
      firstSeenAt: new Date(),
      lastSeenAt: new Date(),
      ...extra
    });
  }

  return sessionData;
}

async function initSession(req, res, next) {
  try {
    const tracking = buildTrackingData(req);
    let sessionData = await Session.findOne({ sessionId: req.sessionID });

    if (!sessionData) {
      req.session.userId = `guest_${Date.now()}`;
      sessionData = await Session.create({
        sessionId: req.sessionID,
        userId: req.session.userId,
        role: "buyer",
        ip: tracking.ip,
        forwardedFor: tracking.forwardedFor,
        userAgent: tracking.userAgent,
        language: tracking.language,
        timezone: tracking.timezone,
        referrer: tracking.referrer,
        landingPage: tracking.pageView.path || tracking.pageView.url,
        lastPage: tracking.pageView.path || tracking.pageView.url,
        firstSeenAt: new Date(),
        lastSeenAt: new Date(),
        location: tracking.location,
        browser: tracking.browser,
        os: tracking.os,
        device: tracking.device,
        screen: tracking.screen,
        utm: tracking.utm
      });
    } else {
      await sessionData.incrementVisitCount();
    }

    res.json({
      acknowledgement: true,
      sessionId: sessionData.sessionId,
      userId: sessionData.userId,
      role: sessionData.role,
      data: sessionData
    });
  } catch (err) {
    next(err);
  }
}

async function getSession(req, res) {
  try {
    let sessionData = await Session.findOne({ sessionId: req.sessionID });

    if (!sessionData) {
      const tracking = buildTrackingData(req);
      sessionData = await ensureSession(req, {
        ip: tracking.ip,
        forwardedFor: tracking.forwardedFor,
        userAgent: tracking.userAgent,
        language: tracking.language,
        timezone: tracking.timezone,
        referrer: tracking.referrer,
        landingPage: tracking.pageView.path || tracking.pageView.url,
        lastPage: tracking.pageView.path || tracking.pageView.url,
        location: tracking.location,
        browser: tracking.browser,
        os: tracking.os,
        device: tracking.device,
        screen: tracking.screen,
        utm: tracking.utm
      });
    }

    if (!sessionData) {
      return res.status(404).json({
        acknowledgement: false,
        message: "یافت نشد",
        description: "نشست فعلی برای شما یافت نشد"
      });
    }

    res.status(200).json({
      acknowledgement: true,
      message: "موفق",
      description: "نشست با موفقیت دریافت شد",
      data: sessionData
    });
  } catch (err) {
    return res.status(404).json({
      acknowledgement: false,
      message: "یافت نشد",
      description: "نشست فعلی برای شما یافت نشد"
    });
  }
}

async function trackSession(req, res, next) {
  try {
    const tracking = buildTrackingData(req);
    await ensureSession(req, {
      ip: tracking.ip,
      forwardedFor: tracking.forwardedFor,
      userAgent: tracking.userAgent,
      language: tracking.language,
      timezone: tracking.timezone,
      referrer: tracking.referrer,
      landingPage: tracking.pageView.path || tracking.pageView.url,
      location: tracking.location,
      browser: tracking.browser,
      os: tracking.os,
      device: tracking.device,
      screen: tracking.screen,
      utm: tracking.utm
    });

    const page = tracking.pageView.path || tracking.pageView.url;
    const inc = {
      totalDurationMs: tracking.pageView.durationMs
    };

    if (tracking.pageView.event === "pageview") {
      inc.pageViewCount = 1;
    }

    const update = {
      $set: {
        ip: tracking.ip,
        forwardedFor: tracking.forwardedFor,
        userAgent: tracking.userAgent,
        language: tracking.language,
        timezone: tracking.timezone,
        referrer: tracking.referrer,
        lastPage: page,
        lastSeenAt: new Date(),
        location: tracking.location,
        browser: tracking.browser,
        os: tracking.os,
        device: tracking.device,
        screen: tracking.screen
      },
      $setOnInsert: {
        sessionId: req.sessionID,
        userId: req.session.userId || `guest_${Date.now()}`,
        role: "buyer",
        firstSeenAt: new Date(),
        landingPage: page,
        utm: tracking.utm
      },
      $inc: inc,
      $push: {
        pageViews: {
          $each: [tracking.pageView],
          $slice: -200
        }
      }
    };

    const sessionData = await Session.findOneAndUpdate(
      { sessionId: req.sessionID },
      update,
      { new: true, upsert: true, setDefaultsOnInsert: true }
    );

    res.status(200).json({
      acknowledgement: true,
      message: "موفق",
      description: "نشست ثبت شد",
      data: {
        sessionId: sessionData.sessionId,
        pageViewCount: sessionData.pageViewCount,
        totalDurationMs: sessionData.totalDurationMs
      }
    });
  } catch (err) {
    next(err);
  }
}

async function getSessions(req, res, next) {
  try {
    const page = Math.max(1, Number(req.query.page) || 1);
    const limit = Math.min(100, Math.max(1, Number(req.query.limit) || 10));
    const search = (req.query.search || "").trim();
    const skip = (page - 1) * limit;
    const query = {};

    if (search) {
      query.$or = [
        { sessionId: { $regex: search, $options: "i" } },
        { userId: { $regex: search, $options: "i" } },
        { ip: { $regex: search, $options: "i" } },
        { "location.country": { $regex: search, $options: "i" } },
        { "location.city": { $regex: search, $options: "i" } },
        { lastPage: { $regex: search, $options: "i" } },
        { referrer: { $regex: search, $options: "i" } }
      ];
    }

    const [sessions, total, stats] = await Promise.all([
      Session.find(query)
        .sort({ lastSeenAt: -1, updatedAt: -1 })
        .skip(skip)
        .limit(limit)
        .select("-pageViews")
        .lean(),
      Session.countDocuments(query),
      Session.aggregate([
        { $match: query },
        {
          $group: {
            _id: null,
            totalDurationMs: { $sum: "$totalDurationMs" },
            totalPageViews: { $sum: "$pageViewCount" },
            activeToday: {
              $sum: {
                $cond: [
                  { $gte: ["$lastSeenAt", new Date(Date.now() - 24 * 60 * 60 * 1000)] },
                  1,
                  0
                ]
              }
            }
          }
        }
      ])
    ]);

    res.status(200).json({
      acknowledgement: true,
      message: "موفق",
      description: "لیست نشست‌ها دریافت شد",
      data: {
        sessions,
        total,
        totalPages: Math.max(1, Math.ceil(total / limit)),
        page,
        limit,
        stats: stats[0] || { totalDurationMs: 0, totalPageViews: 0, activeToday: 0 }
      }
    });
  } catch (err) {
    next(err);
  }
}

async function getSessionDetails(req, res, next) {
  try {
    const id = req.params.id;
    const query = mongoose.Types.ObjectId.isValid(id)
      ? { $or: [{ _id: id }, { sessionId: id }] }
      : { sessionId: id };
    const sessionData = await Session.findOne(query).lean();

    if (!sessionData) {
      return res.status(404).json({
        acknowledgement: false,
        message: "یافت نشد",
        description: "نشست پیدا نشد"
      });
    }

    res.status(200).json({
      acknowledgement: true,
      message: "موفق",
      description: "جزئیات نشست دریافت شد",
      data: sessionData
    });
  } catch (err) {
    next(err);
  }
}

async function deleteSession(req, res, next) {
  try {
    const sessionData = await Session.findOneAndDelete({ sessionId: req.sessionID });
    res.json(sessionData || { message: "No session found" });
  } catch (err) {
    next(err);
  }
}

module.exports = {
  initSession,
  getSession,
  trackSession,
  getSessions,
  getSessionDetails,
  deleteSession
};
