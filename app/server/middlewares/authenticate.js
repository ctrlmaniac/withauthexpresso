const jwt = require("jsonwebtoken");
const fs = require("fs");
const path = require("path");

const key = fs.readFileSync(path.join(__dirname, "..", "..", "private.key"));

const authenticate = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  if (token == null) return res.sendStatus(401);

  jwt.verify(token, key, (err, payload) => {
    if (err) return res.sendStatus(403);

    req.user = payload;

    next();
  });
};

module.exports = authenticate;
