const express = require("express");
const { create } = require("express-handlebars");
const path = require("path");
const morgan = require("morgan");
const methodOverride = require('method-override')

// Initializations
const app = express();

// Settings
app.set("port", process.env.PORT || 4000);
app.set("views", path.join(__dirname, "views"));

//Motor de plantillas
app.set("view engine", "ejs");

// Middlewars
app.use(express.urlencoded({ extended: false }));
app.use(morgan("dev"));
app.use(methodOverride('_method'))

// Global Variables

// Routes
app.use(require("./routes/index.routes"));
app.use(require("./routes/ads.routes"));

// Static files
app.use(express.static(path.join(__dirname, "public")));

module.exports = app;
