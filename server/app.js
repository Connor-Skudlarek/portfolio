var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");

var app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "..", "client", "build")));

app.get("/*", function (req, res) {
    console.log(path.join(__dirname, "..", "client", "build", "index.html"))
    res.sendFile(path.join(__dirname, "..", "client", "build", "index.html"));
});

// app.use("/", indexRouter);
// app.use("/users", usersRouter);

app.listen(80, () => console.log("App listening on 3000"));

module.exports = app;
