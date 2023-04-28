const Sequelize = require('sequelize');
const db = require('../util/database');

const Card = db.define('card', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    description: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    likes: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    comments: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    image: {
        type: Sequelize.TEXT,
        allowNull: false,
    }
});


module.exports = Card;