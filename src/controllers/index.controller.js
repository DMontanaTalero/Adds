const indexCtrl = {};

indexCtrl.renderIndex = (req, res) => {
  res.redirect("/users/signin");
};

indexCtrl.renderLogin = (req, res) => {
  res.render("./partials/login");
};

indexCtrl.renderRegister = (req, res) => {
  res.render("./partials/register");
};

module.exports = indexCtrl;
