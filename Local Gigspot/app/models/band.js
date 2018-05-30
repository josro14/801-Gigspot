module.exports = function(sequelize, DataTypes) {

    var Band = sequelize.define("band", {

        id: {
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER
        },

        username: {
            type: Sequelize.STRING,
            notEmpty: true
        },

        // email: {
        //     type: Sequelize.STRING,
        //     validate: {
        //         isEmail: true
        //     }
        // },

        // password: {
        //     type: Sequelize.STRING,
        //     allowNull: false
        // },

        band_name: {
            type: Sequelize.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },

        genre: {
            type: Sequelize.STRING
        },

        bio: {
            type: Sequelize.TEXT
        },

        last_login: {
            type: Sequelize.DATE
        }

        //any other defining attributes (columns) that would define any given band
    });

    // Band.associate = function(models) {

    // }

    return Band;
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