const adsCtrl = {};
const Ad = require("../models/Ad");

adsCtrl.renderAdForm = (req, res) => {
  res.render("ads/new-ad");
};

adsCtrl.createNewAd = async (req, res) => {
  console.log(req.body);
  const { title, description } = req.body;
  const newAd = new Ad({ title, description });
  console.log(newAd);
  await newAd.save();
  res.redirect("/ads");
};

adsCtrl.renderAds = async (req, res) => {
  const ads = await Ad.find();
  res.render("ads/all-ads", { ads });
};

adsCtrl.renderEditForm = async (req, res) => {
  const ad = await Ad.findById(req.params.id);
  res.render("ads/edit-ad", { ad });
};

adsCtrl.updateAd = async (req, res) => {
  const { title, description } = req.body;
  await Ad.findByIdAndUpdate(req.params.id, { title, description });
  res.redirect("/ads");
};

adsCtrl.deleteAd = async (req, res) => {
  await Ad.findByIdAndDelete(req.params.id);
  res.redirect("/ads");
};

module.exports = adsCtrl;
