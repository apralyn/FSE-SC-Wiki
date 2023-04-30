const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const path = require("path");

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.status(200);
  res.send("Welcome to Show Control Wiki");
});

app.use("/images", express.static(path.join(__dirname, "images")));

module.exports = app;
