const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

const config = require("./DB");
const userRoute = require("./routes/UserRoute");

const PORT = process.env.PORT || 5000;

const app = express();

mongoose.connect(config.DB).then(
  () => {
    console.log("Database is connected");
  },
  (err) => {
    console.log("Can not connect to the database" + err);
  }
);

app.get("/", function (req, res) {
  res.send("hello");
});

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

let corsOptions = {
  origin: "http://localhost:4200",
  optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
};

app.use(cors(corsOptions));
app.use("/api/users", userRoute);

app.listen(PORT, () => {
  console.log(`Server is running on PORT ${PORT}`);
});
