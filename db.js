const {Sequelize} = require('sequelize')


const sequelize = new Sequelize('copa_america', 'root', 'mysql', {
    host: 'localhost',
    dialect: 'mysql',
    port: 3307
  });


  module.exports = sequelize