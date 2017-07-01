// Dependencies
// =============================================================

// Sequelize (capital) references the standard library
var Sequelize = require("sequelize");
// sequelize (lowercase) references my connection to the DB.
var sequelize = require("../config/connection.js");

// Creates a "Book" model that matches up with DB
var Dress = sequelize.define("dress", {
  id: {
    type: Sequelize.INTEGER
  },
  user_name: {
    type: Sequelize.STRING
  },
  color: {
    type: Sequelize.STRING
  },
  size: {
    type: Sequelize.STRING
  },
  year: {
    type: Sequelize.INTEGER
  },
  price: {
    type: Sequelize.INTEGER
  }
}, {
  timestamps: false
});

// Syncs with DB
Dress.sync();

// Makes the Book Model available for other files (will also create a table)
module.exports = Dress;
