const QRCode = require("../models/qrcode.model");

const { v4: uuidv4 } = require("uuid");

const generateQRCodesForVariation = async (variation) => {
  const codes = [];

  for (let i = 0; i < variation.stock; i++) {
    codes.push({
      variation: variation._id,
      code: uuidv4(),
    });
  }

  const qrDocs = await QRCode.insertMany(codes); 

  const qrIds = qrDocs.map(qr => qr._id);

  variation.qrCodes = qrIds;
  await variation.save();

  return qrDocs;
};

module.exports = generateQRCodesForVariation;
