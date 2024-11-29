const mongoose = require("mongoose");

const { PASSIONDAY_MONGODB_HOST, PASSIONDAY_MONGODB_DATABASE } = process.env;
const MONGODB_URI = `mongodb://${PASSIONDAY_MONGODB_HOST}/${PASSIONDAY_MONGODB_DATABASE}`;

mongoose
  .connect(MONGODB_URI, {})
  .then((db) => console.log("Database connected"))
  .catch((err) => console.log(err));
