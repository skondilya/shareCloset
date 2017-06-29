var passport = require('passport');
var GoogleStrategy = require('passport-google-oauth').OAuthStrategy;

var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "",
  database: "share_Closetdb"

});


connection.connect(function(err) {
  if (err) throw err;
  runSearch();
});
=======

});

connection.connect(function(err) {
  if (err) throw err;
  console.log("Connected as id " + connection.threadId);
});

connection.query("SELECT * FROM dresses", function(err, res) {
  if (err) throw err;
  console.log(res);
});
