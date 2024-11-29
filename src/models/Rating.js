const { Schema, model } = require("mongoose");

const RatingSchema = new Schema(
  {
    client: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    ad: { type: Schema.Types.ObjectId, ref: "Ad", required: true },
    description: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

module.exports = model("Rating", RatingSchema);
