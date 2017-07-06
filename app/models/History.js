var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var HistorySchema = new Schema({
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
    type: 100
  }
});

var History = mongoose.model("History", HistorySchema);
module.exports = History;
