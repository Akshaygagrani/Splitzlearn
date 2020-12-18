const mongoose = require("mongoose");
const shortId = require("shortid");

const registration = new mongoose.Schema({
  registrationId: {
    type: String,
    required: true,
    default: shortId.generate,
  },

  name: {
    type: String,
    required: true,
  },

  phoneNumber: {
    type: String,
    required: true,
  },

  emailId: {
    type: String,
    required: true,
  },

  whatsAppNumber: {
    type: String,
    required: true,
  },

  gender: {
    type: String,
    required: true,
  },

  isGroup: {
    type: Boolean,
    required: false,
    default: false,
  },

  paymentReceipt: {
    type: Buffer,
    required: true,
    contentType: String,
  },

  courseId: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("registrations", registration);
