// Dependencies
var mongoose = require("mongoose");
var Schema = mongoose.Schema;

// New instance
var DressSchema = new Schema({
  user_name: {
    type: String 
  },
  color: {
    type: String
  },
  size: {
    type: String
  },
  year: {
    type: Date
  },
  price: {
    type: Number
  }
});


// export module to use in server.js
var Dress = mongoose.model("Dress", DressesSchema);
module.exports = Dress;
