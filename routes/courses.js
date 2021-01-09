const express = require("express");
const router = express.Router();
const demoClassRequestController = require("../controllers/demoClassRequestsController.js");
const registrationController = require("../controllers/registrationController");

router.get("/courses", (req, res) => {
  res.render("allCourses");
});

router.get("/courses/:name", (req, res) => {
  let name = req.params.name;
  if (name === "ai") {
    res.render("course-ai");
  } else if (name === "ad") {
    res.render("course-ad");
  }

});
// router.post("/request-demo/:courseId", demoClassRequestController.createDemoClassRequest);
// router.post("/register/:courseId", registrationController.createRegistration);

module.exports = router;
