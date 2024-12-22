const { Router } = require("express");
const router = Router();

const {
  renderAdForm,
  createNewAd,
  renderAds,
  renderEditForm,
  updateAd,
  deleteAd,
} = require("../controllers/ads.controller");

const { isAuthenticated } = require("../helpers/auth");

//New ad
router.get("/ads/add", isAuthenticated, renderAdForm);
router.post("/ads/new-ads", isAuthenticated, createNewAd);

//Get all Ads
router.get("/ads", isAuthenticated, renderAds);

//Edit Ads
router.get("/ads/edit/:id", isAuthenticated, renderEditForm);
router.put("/ads/edit/:id", isAuthenticated, updateAd);

// Delete ad
router.delete("/ads/delete/:id", isAuthenticated, deleteAd);

module.exports = router;
