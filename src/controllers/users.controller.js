const usersCtrl = {};
const User = require("../models/User");
const passport = require("passport");

usersCtrl.renderSignUpForm = (req, res) => {
  res.render("users/signup");
};

usersCtrl.signup = async (req, res) => {
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
      name,
      email,
    });
  } else {
    const emailUser = await User.findOne({ email: email });
    if (emailUser) {
      req.flash("error_msg", "El correo ya esta en uso.");
      res.redirect("signup");
    } else {
      const newUser = new User({ name, email, password });
      newUser.password = await newUser.encryptPassword(password);
      await newUser.save();
      req.flash("success_msg", "Registro completado");
      res.redirect("signin");
    }
  }

  console.log(req.body);
};

usersCtrl.renderSigninForm = (req, res) => {
  console.log("Mensaje flash en /users/signin:", res.locals.success_msg);
  res.render("users/signin");
};

usersCtrl.signin = passport.authenticate("local", {
  failureRedirect: "/users/signin",
  successRedirect: "/ads",
  failureFlash: true,
});

usersCtrl.logout = (req, res, next) => {
  req.logout((err) => {
    if (err) {
      return next(err); // Pasa el error al middleware de manejo de errores
    }
  });
  req.flash("success_msg", "La sesión ha sido cerrada");
  console.log("Mensaje flash al cerrar sesión:", req.flash("success_msg"));
  res.redirect("/users/signin");
};

module.exports = usersCtrl;
