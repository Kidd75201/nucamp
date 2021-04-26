var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

// Import routes
var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
const campsiteRouter = require("./routes/campsiteRouter");
const partnerRouter = require("./routes/partnerRouter");
const promotionRouter = require("./routes/promotionRouter");

// Require mongoose module
const mongoose = require("mongoose");

// Mongo Connection
const url = "mongodb://localhost:27017/nucampsite";
const connect = mongoose.connect(url, {
  useCreateIndex: true,
  useFindAndModify: false,
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// handle promise returned from connection method Success or Err
connect.then(
  () => console.log("Connected correctly to server"),
  (err) => console.log(err)
);

var app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");

// Express middleware
app.use(logger("dev"));
// parse the request body, similar to 'body-parser'
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// pass string to cookie
app.use(cookieParser("12345-67890-09876-54321"));

// Authentication
function auth(req, res, next) {
  // verify cookie
  if (!req.signedCookies.user) {
    const authHeader = req.headers.authorization;
    if (!authHeader) {
      const err = new Error("You are not authenticated!");
      res.setHeader("WWW-Authenticate", "Basic");
      err.status = 401;
      return next(err);
    }

    // create array that holds Username[0], password[1]
    // Buffer is a Node global class, '.from' is a static method of buffer
    const auth = Buffer.from(authHeader.split(" ")[1], "base64")
      .toString()
      .split(":");
    const user = auth[0];
    const pass = auth[1];
    if (user === "admin" && pass === "password") {
      // create cookie - name,value,config object <optional>
      res.cookie("user", "admin", { signed: true });

      return next(); // authorized
    } else {
      const err = new Error("You are not authenticated!");
      res.setHeader("WWW-Authenticate", "Basic");
      err.status = 401;
      return next(err);
    }
  } else {
    if (req.signedCookies.user === "admin") {
      return next();
    } else {
      const err = new Error("You are not authenticated!");
      err.status = 401;
      return next(err);
    }
  }
}

app.use(auth);

app.use(express.static(path.join(__dirname, "public")));

// routing middleware
app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/campsites", campsiteRouter);
app.use("/partners", partnerRouter);
app.use("/promotions", promotionRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
