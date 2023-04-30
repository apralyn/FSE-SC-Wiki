const express = require("express");
const router = express.Router();
const wikiCtrl = require("../controllers/wiki")

router.get('/home', wikiCtrl.home)

module.exports = router;