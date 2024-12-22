const express = require("express");
const path = require("path");
const morgan = require("morgan");
const methodOverride = require("method-override");
const flash = require("connect-flash");
const session = require("express-session");
const layouts = require("express-ejs-layouts");
const passport = require("passport");

// Initializations
const app = express();
require('./config/passport')

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

// Configuración de sesiones
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());

// Global Variables
app.use((req, res, next) => {
  res.locals.success_msg = req.flash("success_msg") || null;
  res.locals.error_msg = req.flash("error_msg") || null;
  res.locals.error = req.flash("error") || null;
  res.locals.errors = null; // Siempre define `errors` como nulo de forma predeterminada
  res.locals.name = null; // Siempre define `name` como nulo de forma predeterminada
  res.locals.email = null; // Siempre define `email` como nulo de forma predeterminada
  res.locals.user = req.user || null; // Siempre define `user` como nulo de forma predeterminada
  next();
});

// Routes
app.use(require("./routes/index.routes"));
app.use(require("./routes/ads.routes"));
app.use(require("./routes/users.routes"));

// Static files
app.use(express.static(path.join(__dirname, "public")));

module.exports = app;
