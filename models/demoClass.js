const mongoose = require("mongoose");
const shortId = require("shortid");

const demoClassRequest = new mongoose.Schema({
  requestId: {
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
});

module.exports = mongoose.model("demoClassRequests", demoClassRequest);
