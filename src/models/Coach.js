
var Sequelize = require('sequelize');
const { model } = require('../../db');
var sequelize = require('../../db');



const Coach = sequelize.define('coache', {
    name: {
      type: Sequelize.STRING
    },
    
    birth_date: {
      type: Sequelize.DATE
    },
    nickname: {
      type: Sequelize.STRING
    }
  },
  {
    timestamps: false
  });


 
  module.exports = Coach