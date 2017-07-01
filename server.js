// Server Dependencies
var express = require("express");
var bodyParser = require("body-parser");
var logger = require("morgan");
var mongoose = require("mongoose");

// Create Instance of Express
var app = express();
// Sets an initial port. We'll use this later in our listener
var PORT = process.env.PORT || 3000; 


// Run Morgan for Logging
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

app.use(express.static("./public"));

// -------------------------------------------------
//MONGO DB

//NEED TO ADD MLAB CONFIGURATION!
// MongoDB configuration (Change this URL to your own DB)
mongoose.connect("mongodb://heroku_hz1dhlcg:po405n3t0ulo0isdv0g7p7mlt@ds145892.mlab.com:45892/heroku_hz1dhlcg", {useMongoClient: true});
var db = mongoose.connection;

db.on("error", function(err) {
  console.log("Mongoose Error: ", err);
});

db.once("openUri()", function() {
  console.log("Mongoose Connection Successful ✔");
});


// -------------------------------------------------


// Express Server Start Verification
app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT + " ✔");
});