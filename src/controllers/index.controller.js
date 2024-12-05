const indexCtrl = {};

indexCtrl.renderIndex = (req, res) => {
  res.redirect("/ads");
};

indexCtrl.renderLogin = (req, res) => {
  res.render("./partials/login");
};

indexCtrl.renderRegister = (req, res) => {
  res.render("./partials/register");
};

module.exports = indexCtrl;
