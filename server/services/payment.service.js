const Cart = require("../models/cart.model");
const Product = require("../models/product.model");
const Purchase = require("../models/purchase.model");
const User = require("../models/user.model");
const soap = require("strong-soap").soap;

/* external import */
require("dotenv").config();

/* stripe setup */
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

// create payment
function getMellatErrorMessage(code) {
  const errors = {
    11: "شماره کارت نامعتبر است",
    12: "موجودی کافی نیست",
    17: "کاربر از انجام تراکنش منصرف شده است",
    23: "اعتبار کارت تمام شده است",
    34: "تعداد دفعات ورود رمز بیش از حد مجاز است",
    41: "کارت مفقودی است",
    42: "کارت مسدود است"
    // ادامه کدها...
  };
  return errors[code] || "خطای نامشخص از سمت درگاه Mellat";
}
exports.createPayment = async (req, res) => {
  try {
    const { cartId, province, city, phone, fullName, gateway, userId } =
      req.body;
    console.log("req.body", req.body);
    const cart = await Cart.findById(cartId).populate([
      {
        path: "items.product",
        select: "discountAmount"
      },
      {
        path: "items.variation",
        select: "price"
      }
    ]);

    if (!cart) {
      return res.status(404).json({
        acknowledgement: false,
        description: "سبد خرید پیدا نشد"
      });
    }
    let totalAmount = 0;

    for (const item of cart.items) {
      const price = item.variation?.price || 0;
      const discountPercent = item.product?.discountAmount || 0;
      const discountAmount = (price * discountPercent) / 100;
      const itemPrice = Math.max(price - discountAmount, 0);
      totalAmount += itemPrice * item.quantity;
    }

    const amount = totalAmount;
    console.log("cart", cart);
    console.log("totalAmount", totalAmount);
    const now = new Date();
    const localDate = now.toISOString().slice(0, 10).replace(/-/g, "");
    const localTime = now.toTimeString().slice(0, 8).replace(/:/g, "");

    const orderId = Date.now();

    const args = {
      terminalId: process.env.MELLAT_TERMINAL_ID,
      userName: process.env.MELLAT_USERNAME,
      userPassword: process.env.MELLAT_PASSWORD,
      orderId: orderId,
      amount: amount,
      localDate: localDate,
      localTime: localTime,
      additionalData: "",
      callBackUrl: `${process.env.ORIGIN_URL}/api/payment/callback`,
      payerId: 0
    };
    console.log("args", args);
    const url = "https://bpm.shaparak.ir/pgwchannel/services/pgw?wsdl";

    soap.createClient(url, async function (err, client) {
      if (err) {
        console.error("Error creating SOAP client:", err);
        return res.status(500).json({
          acknowledgement: false,
          description: err.message,
          error: err
        });
      }
    console.error("success connect soap");

      client.bpPayRequest(args, async function (err, result) {
        if (err) {
          return res
            .status(500)
            .json({
              acknowledgement: false,
              description: "SOAP Request Error",
              error: err
            });
        }

        const resData = result.return.split(",");
        console.log("resData", resData);
        if (resData[0] === "0") {
          const refId = resData[1];

          const purchase = await Purchase.create({
            customer: userId,
            customerId: refId,
            orderId: orderId,
            totalAmount: amount,
            products: [],
            province,
            city,
            phone,
            fullName,
            status: "Pending"
          });

          return res.status(201).json({
            acknowledgement: true,
            message: "Redirect to Mellat Gateway",
            url: `https://bpm.shaparak.ir/pgwchannel/startpay.mellat?RefId=${refId}`
          });
        } else {
          return res.status(400).json({
            acknowledgement: false,
            description: `خطای ${resData}`,
            errorCode: resData[0]
          });
        }
      });
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      acknowledgement: false,
      message: "Internal Server Error",
      error: error.toString()
    });
  }
};
