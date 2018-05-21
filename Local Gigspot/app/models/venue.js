module.exports = function(sequelize, DataTypes) {
    var Venue = sequelize.define("Venue", {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        location: {
            type: DataTypes.STRING,
            len: [1]
        }

        //any other defining attributes (columns) that would define any given band
    });

    // Venue.associate = function(models) {

    // }

    return Venue;
};