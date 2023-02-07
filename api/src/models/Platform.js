const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define("Platform", {
        name: {
            type: DataTypes.STRING,
        },
    },
        { timestamps: false }
    );
};