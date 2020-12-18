const registrationSchema = require("../models/registration");
const fs = require("fs");
const path = require("path");

exports.createRegistration = (req, res) => {
  let courseId = req.params.courseId;

  console.log(req.body);
  const {
    name,
    phoneNumber,
    emailId,
    whatsAppNumber,
    gender,
    isGroup,
    paymentReceipt,
  } = req.body;

  let registration = {
    name: name,
    phoneNumber: phoneNumber,
    emailId: emailId,
    whatsAppNumber: whatsAppNumber,
    gender: gender,
    courseId: courseId,
    isGroup: isGroup,
    paymentReceipt: paymentReceipt,
  };

  registrationSchema
    .create(registration)
    .then((createdRegistration) => {
      let createdId = createdRegistration._doc.registrationId;
      console.log(
        "User has successfully registered. the registration ID is:" + createdId
      );
      res.redirect("/courses");
    })
    .catch((err) => {
      console.log("Error in creating registration");
    });
};

exports.getRegistrationById = (req, res) => {
  registrationSchema
    .findOne({ registrationId: req.params.registrationId })
    .then((registration) => {
      res.render("index", { registration: registration });
    })
    .catch((err) => {
      console.log("Cannot find the registration by given ID");
    });
};
