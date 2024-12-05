const usersCtrl = {};
const User = require("../models/User");

usersCtrl.renderSignUpForm = (req, res) => {
  res.render("users/signup");
};

usersCtrl.signup = (req, res) => {
  const errors = [];
  const { name, email, password, confirm_password } = req.body;
  if (password != confirm_password) {
    errors.push({ text: "Las contraseñas no coinciden" });
  }
  if (password.length < 4) {
    errors.push({ text: "La contraseña debe tener minimo 4 caracteres" });
  }
  if (errors.length > 0) {
    res.render("users/signup", {
      errors,
    });
  } else {
    res.send("Registro exitoso");
  }

  console.log(req.body);
};

usersCtrl.renderSigninForm = (req, res) => {
  res.render("users/singin");
};

usersCtrl.signin = (req, res) => {
  res.send("singin");
};

usersCtrl.logout = (req, res) => {
  res.send("logout");
};

module.exports = usersCtrl;
