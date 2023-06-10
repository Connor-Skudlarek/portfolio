require("dotenv").config();
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const mongoose = require("mongoose");
const Contact = require("./models/Contact");

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
var contactRouter = require("./routes/contact");

var app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "..", "client", "build")));

const mongoDBUrl = process.env.DB_URL
mongoose.connect(mongoDBUrl, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));
db.once("open", () => {
  console.log("Connected to MongoDB");
});

app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/api/contact", contactRouter);

// app.post("/", async function (req, res, next) {
//     const { name, email, message } = req.body
//     const newContact = new Contact({
//           name,
//           email,
//           message,
//     })
//     await newContact.save();

//     res.sendFile(path.join(__dirname, "..", "client", "build", "index.html"));
// });

app.listen(80, () => console.log("App listening on 80"));

module.exports = app;
