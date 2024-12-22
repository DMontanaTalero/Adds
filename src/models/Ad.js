const { Schema, model } = require("mongoose");

const AdSchema = new Schema(
  {
    /*provider: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },*/
    title: { type: String, required: true },
    description: { type: String, required: true },
    user: { type: String, required: true },
    /*photos: [String], // URLs o paths de imágenes
    whatsapp: { type: String, required: true },
    city: { type: String, required: true },
    neighborhood: { type: String, required: true },
    rates: { type: Map, of: Number, required: true }, // Clave: tipo de servicio, valor: tarifa
    googleMapsLocation: { type: String, required: false }, // Coordenadas o URL de ubicación
    publishDate: { type: Date, default: Date.now },
    providerAge: { type: Number, required: true },
    schedule: { type: String, required: true }, // Horario disponible
    ratings: [{ type: Schema.Types.ObjectId, ref: "Rating" }], // Referencia a calificaciones
    servicesProvided: { type: Number, default: 0 },*/
  },

  {
    timestamps: true,
  }
);

module.exports = model("Ad", AdSchema);
