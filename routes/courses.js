const express = require("express");
const router = express.Router();
const demoClassRequestController = require("../controllers/demoClassRequestsController.js");
const registrationController = require("../controllers/registrationController");

router.get("/courses", (req, res) => {
  res.render("allCourses");
});

router.get("/courses-web", (req, res) => {
  res.render("course-web");
});

router.post("/request-demo/:courseId", demoClassRequestController.createDemoClassRequest);
router.post("/register/:courseId", registrationController.createRegistration);

module.exports = router;
