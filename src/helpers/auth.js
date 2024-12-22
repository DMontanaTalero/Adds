const helpers = {};

helpers.isAuthenticated = (req, res, next) => {
  if (req.isAuthenticated()) {
    return next();
  }
  req.flash('error_msg', 'Debes iniciar sesión para acceder a este sitio')
  res.redirect("/users/signin");
};

module.exports = helpers;