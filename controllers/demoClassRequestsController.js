const demoClassRequestModel = require("../models/demoClass");

exports.createDemoClassRequest = (req, res) => {
  console.log(req.body);
  const { name, phoneNumber, emailId, whatsAppNumber, gender } = req.body;
  let demoClassRequest = {
    name: name,
    phoneNumber: phoneNumber,
    emailId: emailId,
    whatsAppNumber: whatsAppNumber,
    gender: gender,
  };
  demoClassRequestModel
    .create(demoClassRequest)
    .then((createdRequest) => {
      console.log(
        "New Demo Request was created with ID:",
        createdRequest.requestId,
        createdRequest._doc
      );
      res.send(200, JSON.stringify(createdRequest._doc));
    })
    .catch((err) => {
      console.log(err);
      res.send(500, "An error has occurred!");
    });
};
