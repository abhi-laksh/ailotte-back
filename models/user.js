const Sequelize = require('sequelize');
const db = require('../util/database');

const User = db.define('user', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    name: Sequelize.STRING,
    email: Sequelize.STRING,
    address: Sequelize.TEXT,
    profile_pic: Sequelize.TEXT,
});


module.exports = User;