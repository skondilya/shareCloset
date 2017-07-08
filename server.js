// Server Dependencies
var express = require("express");
var bodyParser = require("body-parser");
var logger = require("morgan");
var mongoose = require("mongoose");

// Require Dress Schema
var Dress = require("./app/models/dress");

// Create Instance of Express
var app = express();
// Sets an initial port. We'll use this later in our listener
var PORT = process.env.PORT || 8080;


// Run Morgan for Logging
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

app.use(express.static("./public"));

// -------------------------------------------------
//MONGO DB


mongoose.Promise = global.Promise;


// MongoDB configuration (Change this URL to your own DB)
mongoose.connect("mongodb://heroku_hz1dhlcg:po405n3t0ulo0isdv0g7p7mlt@ds145892.mlab.com:45892/heroku_hz1dhlcg/share_closetdb -u atrier - p password", {useMongoClient: true});
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


// This is the route we will send GET requests to retrieve our most recent click data.
// We will call this route the moment our page gets rendered
app.get("/product", function(req, res) {

  // This GET request will search for the latest clickCount
  Dress.find({}).exec(function(err, doc) {

    if (err) {
      console.log(err);
    }
    else {
      res.send(doc);
    }
  });
});

// This is the route we will send POST requests to save each click.
// We will call this route the moment the "click" or "reset" button is pressed.
app.post("/product", function(req, res) {

  var user_nameID = req.body.user_name;
  var color = req.body.color;

  // Note how this route utilizes the findOneAndUpdate function to update the clickCount
  // { upsert: true } is an optional object we can pass into the findOneAndUpdate method
  // If included, Mongoose will create a new document matching the description if one is not found
  Dress.findOneAndUpdate({
    user_name: user_name
  }, {
    $set: {
      color: color
    }
  }, { upsert: true }).exec(function(err) {

    if (err) {
      console.log(err);
    }
    else {
      res.send("Updated Click Count!");
    }
  });
});


// Express Server Start Verification
app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT + " ✔");
});
