const { Router } = require("express");
const router = Router();
const {renderLogin, renderIndex, renderRegister} = require('../controllers/index.controller')

router.get("/", renderIndex);

router.get("/login", renderLogin);

router.get("/register", renderRegister);

module.exports = router;
