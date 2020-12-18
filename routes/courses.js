const demoClassRequestController = require("../controllers/demoClassRequestsController.js");

const express = require("express");
const router = express.Router();

router.get("/courses", (req, res) => {
  res.render("allCourses");
});

router.get("/courses-web", (req, res) => {
  res.render("course-web");
});

router.post("/request-demo", demoClassRequestController.createDemoClassRequest);

module.exports = router;
