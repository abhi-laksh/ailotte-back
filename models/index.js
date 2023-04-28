const Card = require('./card')
const User = require('./user')



User.hasMany(Card, { as: 'cards', foreignKey: 'userId' });
Card.belongsTo(User, { as: 'user', foreignKey: 'userId' });

module.exports = { Card, User };