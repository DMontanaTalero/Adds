const adsCtrl = {};
const Ad = require("../models/Ad");

adsCtrl.renderAdForm = (req, res) => {
  console.log(req.user);
  res.render("ads/new-ad");
};

adsCtrl.createNewAd = async (req, res) => {
  console.log(req.body);
  const { title, description } = req.body;
  const newAd = new Ad({ title, description });
  newAd.user = req.user.id;
  console.log(newAd);
  await newAd.save();
  req.flash("success_msg", "Ad added successfully");
  res.redirect("/ads");
};

adsCtrl.renderAds = async (req, res) => {
  const ads = await Ad.find({ user: req.user.id });
  res.render("ads/all-ads", { ads });
};

adsCtrl.renderEditForm = async (req, res) => {
  const ad = await Ad.findById(req.params.id);
  if (ad.user != req.user.id) {
    req.flash("error_msg", "No estas autorizado");
    return res.redirect("/ads");
  }
  res.render("ads/edit-ad", { ad });
};

adsCtrl.updateAd = async (req, res) => {
  const { title, description } = req.body;
  
  await Ad.findByIdAndUpdate(req.params.id, { title, description });
  req.flash("success_msg", "Ad updated successfully");
  res.redirect("/ads");
};

adsCtrl.deleteAd = async (req, res) => {
  await Ad.findByIdAndDelete(req.params.id);
  req.flash("success_msg", "Ad deleted successfully");
  res.redirect("/ads");
};

module.exports = adsCtrl;
