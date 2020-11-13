// server.js
const express = require("express");
const serveStatic = require("serve-static");
const path = require("path");

const app = express();

// serves files from our dist directory shich now contains out index.html files
app.use("/", serveStatic(path.join(__dirname, "/dist")));

const port = process.env.PORT || 5000;
app.listen(port);

console.log("server started " + port);
