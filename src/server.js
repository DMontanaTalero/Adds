const express = require("express");
const path = require("path");
const morgan = require("morgan");
const methodOverride = require("method-override");
const flash = require("connect-flash");
const session = require("express-session");
const layouts = require("express-ejs-layouts");

// Initializations
const app = express();

// Settings
app.set("port", process.env.PORT || 4000);
app.set("views", path.join(__dirname, "views"));
app.use(layouts);

//Motor de plantillas
app.set("view engine", "ejs");
app.set("layout", "layouts/layout");

// Middlewars
app.use(express.urlencoded({ extended: false }));
app.use(morgan("dev"));
app.use(methodOverride("_method"));
app.use(
  session({
    secret: "secret",
    resave: true,
    saveUninitialized: true,
  })
);
app.use(flash());


// Global Variables
app.use((req, res, next) => {
  res.locals.success_msg = req.flash("success_msg") || null;
  next();
});
app.use((req, res, next) => {
  res.locals.errors = null; // Siempre define `errors` como nulo de forma predeterminada
  next();
});

// Routes
app.use(require("./routes/index.routes"));
app.use(require("./routes/ads.routes"));
app.use(require("./routes/users.routes"));

// Static files
app.use(express.static(path.join(__dirname, "public")));

module.exports = app;
