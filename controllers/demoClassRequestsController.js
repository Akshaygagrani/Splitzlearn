const demoClassRequestModel = require("../models/demoClass");

exports.createDemoClassRequest = (req, res) => {
  console.log(req.body);
  const {
    name,
    phoneNumber,
    emailId,
    whatsAppNumber,
    gender,
    courseId,
  } = newFunction(req);
  
  let demoClassRequest = {
    name: name,
    phoneNumber: phoneNumber,
    emailId: emailId,
    whatsAppNumber: whatsAppNumber,
    gender: gender,
    courseId: courseId,
  };
  
  demoClassRequestModel
    .create(demoClassRequest)
    .then((createdRequest) => {
      console.log(
        "New Demo Request was created with ID:",
        createdRequest.requestId,
        createdRequest._doc
      );
      res.status(200).send(createdRequest._doc);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send("An error has occurred!");
    });
};
function newFunction(req) {
  return req.body;
}

