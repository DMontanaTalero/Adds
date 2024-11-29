const { Schema, model } = require("mongoose");

const BalanceSchema = new Schema(
  {
    user: { type: Schema.Types.ObjectId, ref: "User", required: true },
    transactionType: {
      type: String,
      enum: ["Adición", "Retiro", "Reducción"],
      required: true,
    },
    amount: { type: Number, required: true }, // Positivo para adiciones, negativo para reducciones/retiros
    relatedAd: { type: Schema.Types.ObjectId, ref: "Ad", required: false }, // Solo para reducciones
    newBalance: { type: Number, required: true },
  },
  {
    timestamps: true,
  }
);

module.exports = model("Balance", BalanceSchema);
