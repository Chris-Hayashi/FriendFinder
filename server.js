var express = require("express");
var path = require("path");

var app = express();
var PORT = process.env.PORT || 8080;

app.use(express.static("public"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());



var htmlRoutes = require("./app/routing/htmlRoutes");
app.use(htmlRoutes);

var apiRoutes = require("./app/routing/apiRoutes");
app.use(apiRoutes);
















app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });