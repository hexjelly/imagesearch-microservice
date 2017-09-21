require("dotenv-extended").load({ errorOnMissing: true });
const express = require("express");
const app = express();

// Routes
app.use(require("./routes"));

module.exports = app;
