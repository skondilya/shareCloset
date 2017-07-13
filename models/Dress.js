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
const Dress = module.exports = mongoose.model("Dress", DressSchema);

// Get Dresses
module.exports.getDresses = (callback, limit) => {
  Dress.find(callback).limit(limit);
}

// Get Dress
module.exports.getDressById = (id, callback) => {
  Dress.findById(id, callback);
}

// Add Dress
module.exports.addDress = (dress, callback) => {
  Dress.create(dress, callback);
}

// Update Dress
module.exports.updateDress = (id, dress, options, callback) => {
  var query = {_id: id};
  var update = {
    user_name: dress.user_name,
    user_nameID: dress.user_nameID,
    color: dress.color,
    size: dress.size,
    year: dress.year,
    price: dress.price
  }
  Dress.findOneAndUpdate(query, update, options, callback);
}

// Delete Dress
module.exports.removeDress = (id, callback) => {
  var query = {_id: id};
  Dress.remove(query, callback);
}
// Exports for use elsewhere
module.exports = Dress;
