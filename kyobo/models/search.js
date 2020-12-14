module.exports = (sequelize, DataTypes) => {
    return sequelize.define('Search', {

        search_idx: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },

        search_keyword: {
            type: DataTypes.STRING(200),
            allowNull: false,
        },
    }, {
        freezeTableName: true,
        timestamps: false,
    });
};