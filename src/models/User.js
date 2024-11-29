const { Schema, model } = require("mongoose");
const bcrypt = require("bcryptjs");

const UserSchema = new Schema(
  {
    name: { type: String, required: false }, // Solo para proveedores
    alias: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    balance: { type: Number, default: 0 }, // Solo para proveedores
    isProvider: { type: Boolean, required: true }, // True: proveedor, False: cliente
    servicesCompleted: { type: Number, default: 0 }, // Solo para clientes
    favoriteAds: [{ type: Schema.Types.ObjectId, ref: "Ad" }], // Solo para clientes
  },
  {
    timestamps: true,
  }
);

UserSchema.methods.encrypPassword = async (password) => {
  const salt = await bcrypt.genSalt(10);
  return await bcrypt.hash(password, salt);
};

UserSchema.methods.matchPassword = async function (password) {
  return await bcrypt.compare(password, this.password);
};

module.exports = model("User", UserSchema);
