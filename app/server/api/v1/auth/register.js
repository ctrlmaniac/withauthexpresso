const bcrypt = require("bcryptjs");
const _ = require("lodash");
const prisma = require("../../../utils/prisma");

// Register function
const register = async (req, res) => {
  // Check if user already exists
  const exists = await prisma.user.findUnique({
    where: {
      email: req.body.email,
    },
  });

  if (!_.isEmpty(exists)) {
    return res.json("User already exists");
  } else {
    // Hash the given password and save the user
    bcrypt.hash(req.body.password, 12).then(async (password) => {
      await prisma.user.create({
        data: {
          email: req.body.email,
          password: password,
        },
      });

      return res.json("User successfully registered!");
    });
  }
};

module.exports = register;
