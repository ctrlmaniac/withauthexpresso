const fs = require("fs");
const express = require("express");
const cors = require("cors");
const path = require("path");
const bodyParser = require("body-parser");
const findApi = require("./utils/findApi");

// App definition
const app = express(express.json());
const port = process.env.PORT || 3000;

app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Media
app.use("/media", express.static(path.join(__dirname, "..", "media")));

// Static files
app.use(express.static(path.join(__dirname, "..", "static")));

// API or client routes
findApi(app, path.join(__dirname, "api"), "/api");

// Serve index.html
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "static", "index.html"));
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
