module.exports = function(sequelize, DataTypes) {

    var Venue = sequelize.define("Venue", {

        id: {
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER
        },

        username: {
            type: Sequelize.STRING,
            notEmpty: true
        },

        venue_name: {
            type: Sequelize.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        
        location: {
            type: Sequelize.STRING,
            len: [1]
        },

        about: {
            type: Sequelize.TEXT
        },

        last_login: {
            type: Sequelize.DATE
        }

        //any other defining attributes (columns) that would define any given band
    });

    // Venue.associate = function(models) {

    // }

    return Venue;
};
// var orm = require("../config/orm.js");

// var burger = {
//   all: function(cb) {
//     orm.all("burgers", function(res) {
//       cb(res);
//     });
//   },
//   // The variables cols and vals are arrays.
//   create: function(cols, vals, cb) {
//     orm.create("burgers", cols, vals, function(res) {
//       cb(res);
//     });
//   },
//   update: function(objColVals, condition, cb) {
//     orm.update("burgers", objColVals, condition, function(res) {
//       cb(res);
//     });
//   },
//   delete: function(condition, cb) {
//     orm.delete("burgers", condition, function(res) {
//       cb(res);
//     });
//   }
// };

// // Export the database functions for the controller (catsController.js).
// module.exports = burger;