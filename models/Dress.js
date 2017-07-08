// Mongoose Dependencies
var mongoose = require("mongoose");
var Schema = mongoose.Schema;

// Dresses for sale, creates new instance
var DressSchema = new Schema({
  user_name: {
    type: Number
  },
  user_nameID: {
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

// Creates the model 
var Dress = mongoose.model("Dress", DressSchema);

// Exports for use elsewhere
module.exports = Dress;
