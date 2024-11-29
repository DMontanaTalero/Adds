const { Schema, model, default: mongoose } = require("mongoose");

const ServiceSchema = new Schema(
  {
    client: { type: Schema.Types.ObjectId, ref: "User", required: true },
    ad: { type: Schema.Types.ObjectId, ref: "Ad", required: true },
    status: {
      type: String,
      enum: ["Confirmando", "Aceptado", "Finalizado", "Cancelado"],
      default: "Confirmando",
    },
    serviceDate: { type: Date, required: true }, //fecha con calendario
    serviceTime: { type: String, required: true }, // Hora en formato HH:mm
  },
  {
    timestamps: true,
  }
);

module.exports = model("Service", ServiceSchema);
