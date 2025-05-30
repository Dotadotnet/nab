const express = require("express");
const cors = require("cors");
require("dotenv").config();
const session = require("express-session");
const cookieParser = require("cookie-parser");
const error = require("./middleware/error.middleware");
const responseEdite = require("./config/responseEditeMiddleware");

const app = express();

/* allowed origins */
const allowedOrigins = [
  process.env.NEXT_PUBLIC_CLIENT_URL,
  process.env.NEXT_PUBLIC_DASHBOARD_URL
];

const corsOptions = {
  origin: allowedOrigins,
  methods: ["GET", "POST", "PATCH", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization", "x-lang"],
  credentials: true
};

app.use(cors(corsOptions));

app.use(express.json());

app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: {
      maxAge: 7 * 24 * 60 * 60 * 1000,
      httpOnly: true,
      secure: false,
      sameSite: "lax"
    }
  })
);

app.use(cookieParser());



app.use(async (req, res, next) => {
  const originalSend = res.send;
  res.send = async function (body) {
    const ClassResponseEdite = new responseEdite(body , req)
    const response = await ClassResponseEdite.getResult() ;
    originalSend.call(this , response );
  };
  next();
});

//middleware to intercept response.json()
// app.use((req, res, next) => {
// 	const originalJson = res.json;

// 	// Override the json function
// 	res.json = function (body) {
// 		// Modify the response body
// 		const ModifybodyJson = { ...body, data: 'modified' }
// 		console.log('Intercepted response.json():', body);
// 		console.log('Intercepted response.json():', ModifybodyJson);

// 		originalJson.call(this, ModifybodyJson);
// 	};

// 	next();
// });





app.use("/api/unit", require("./routes/unit.route"));
app.use("/api/tag", require("./routes/tag.route"));
app.use("/api/category", require("./routes/category.route"));
app.use("/api/product", require("./routes/product.route"));
app.use("/api/user", require("./routes/user.route"));
app.use("/api/admin", require("./routes/admin.route"));
app.use("/api/cart", require("./routes/cart.route"));
app.use("/api/settings", require("./routes/settings.route"));
app.use("/api/favorite", require("./routes/favorite.route"));
app.use("/api/review", require("./routes/review.route"));
app.use("/api/dynamic", require("./routes/dynamic.route"));
app.use("/api/payment", require("./routes/payment.route"));
app.use("/api/purchase", require("./routes/purchase.route"));
app.use("/api/post", require("./routes/post.route"));
app.use("/api/blog", require("./routes/blog.route"));
app.use("/api/session", require("./routes/session.route"));
app.use("/api/gallery", require("./routes/gallery.route"));
app.use("/api/cookie", require("./routes/cookie.route"));



app.use(error);

module.exports = app;
