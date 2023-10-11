const express = require("express");
const path = require("path");

const app = express();

const PORT = process.env.PORT || 3000;

app.get("/js/personascript", (req, res) => {
  res.sendFile(__dirname + "/index.js");
});

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/sample-cryptoslate.html");
});

app.listen(PORT, () => {
  console.log("Server is up on " + PORT);
});
