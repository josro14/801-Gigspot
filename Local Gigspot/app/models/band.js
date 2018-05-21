module.exports = function(sequelize, DataTypes) {
    var Band = sequelize.define("Band", {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        genre: DataTypes.STRING,
        bio: {
            type: DataTypes.TEXT,
            len: [1]
        }

        //any other defining attributes (columns) that would define any given band
    });

    // Band.associate = function(models) {

    // }

    return Band;
};