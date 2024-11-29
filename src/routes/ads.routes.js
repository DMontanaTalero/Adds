const { Router } = require("express");
const router = Router();

const {
  renderAdForm,
  createNewAd,
  renderAds,
  renderEditForm,
  updateAd,
  deleteAd
} = require("../controllers/ads.controller");

//New ad
router.get("/ads/add", renderAdForm);
router.post("/ads/new-ads", createNewAd);

//Get all Ads
router.get("/ads", renderAds);

//Edit Ads
router.get("/ads/edit/:id", renderEditForm);
router.put("/ads/edit/:id", updateAd);

// Delete ad
router.delete('/ads/delete/:id', deleteAd)

module.exports = router;
