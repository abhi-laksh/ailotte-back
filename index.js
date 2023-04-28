const express = require('express');
const bodyparser = require('body-parser');
const sequelize = require('./util/database');
const path = require('path');

const app = express();

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: false }));

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  next();
});

const directory = path.join(__dirname, 'uploads');
app.use('/uploads', express.static(directory))

//CRUD routes
app.use('/users', require('./routes/users'));
app.use('/card', require('./routes/card'));

//error handling
app.use((error, req, res, next) => {
  console.log(error);
  const status = error.statusCode || 500;
  const message = error.message;
  res.status(status).json({ message: message });
});

//sync database
sequelize
  .sync()
  .then(data => {
    console.log("Database connected");
    app.listen(3000);
  })
  .catch(err => console.log(err));
