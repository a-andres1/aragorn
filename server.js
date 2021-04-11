const express = require('express');
const sequelize = require('./config/connection');
const Department = require('./models/department');
const Employee = require('./models/employee');
const Role = require('./models/role');
const prompt = require('./index');
const call = require('./index');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening'))
  call();
});



