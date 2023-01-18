const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('genre', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            // autoIncrement: true, hace que el id sea serial autoincremental
        },
        name: {
            type: DataTypes.STRING,
        },
    },
        { timestamps: false }
    );
};