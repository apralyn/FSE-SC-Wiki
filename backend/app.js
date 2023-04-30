const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const path = require("path");
const wikiRoutes = require("./routes/wiki");

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors());
app.use(express.json());

app.use("/images", express.static(path.join(__dirname, "images")));
app.use("/", wikiRoutes);

module.exports = app;
