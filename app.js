const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const path = require("path");
const app = express();
const logger = require("morgan");
const cors = require("cors");
const mainRoutes = require("./routes/mainRoutes");
const coursesRoutes = require("./routes/courses");

require("dotenv").config();
const envData = process.env;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));
app.set("views", path.join(__dirname, "views"));
app.use(cors({ credentials: true }));

mongoose
  .connect(envData.DB, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
  .then((success) => {
    console.log("DB connection successful");
  })
  .catch((err) => {
    console.log("Error in connecting DB");
  });

app.use(logger("dev"));

app.use(mainRoutes);
app.use(coursesRoutes);

const PORT = envData.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is up and running at ${PORT}. Go ahead make your move.`);
});
