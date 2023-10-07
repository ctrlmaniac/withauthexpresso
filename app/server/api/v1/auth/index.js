const express = require("express");

const router = express.Router();

// Controllers
const login = require("./login");
const register = require("./register");

router.post("/register", register);
router.post("/login", login);

module.exports = router;
