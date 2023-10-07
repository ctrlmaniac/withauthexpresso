const express = require("express");
const authenticate = require("../../../middlewares/authenticate.js");

const router = express.Router();

const greet = require("./greet");

router.get("", authenticate, greet);

module.exports = router;
