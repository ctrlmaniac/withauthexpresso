const bcrypt = require("bcryptjs");
const _ = require("lodash");
const jwt = require("jsonwebtoken");
const fs = require("fs");
const path = require("path");
const prisma = require("../../../utils/prisma");

const key = fs.readFileSync(
  path.join(__dirname, "..", "..", "..", "..", "private.key")
);

const login = async (req, res) => {
  if (_.isEmpty(req.body)) {
    return res.json("Empty credentials");
  }

  const { email, password } = req.body;

  const user = await prisma.user.findUnique({
    where: {
      email: email,
    },
  });

  if (_.isEmpty(user)) {
    return res.status(404).json("User not found!");
  } else {
    bcrypt.compare(password, user.password).then((doMatch) => {
      if (doMatch) {
        const token = jwt.sign(user, key, {
          expiresIn: "24h",
        });

        return res.json({
          id: user.id,
          token: token,
        });
      }

      return res.status(403).json("Invalid credentials");
    });
  }
};

module.exports = login;
