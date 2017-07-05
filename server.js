// Server Dependencies
var express = require("express");
var bodyParser = require("body-parser");
var logger = require("morgan");
var mongoose = require("mongoose");

// Require Dress Schema
var Dress = require("./models/dress");

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

// Main "/" Route. This will redirect the user to our rendered React application
app.get("/", function(req, res) {
  res.sendFile(__dirname + "/public/index.html");
});


// Testing MongoDB
app.get("/product", function(req, res) {

  // We will find all the records, sort it in descending order, then limit the records to 5
  Dress.find({}).sort([
    ["color", "size"]
  ]).limit(5).exec(function(err, doc) {
    if (err) {
      console.log(err);
    }
    else {
      res.send(doc);
    }
  });
});





// Express Server Start Verification
app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT + " ✔");
});