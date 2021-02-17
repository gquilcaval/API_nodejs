
var Sequelize = require('sequelize')
var sequelize = require('../../db');
 

const Country = sequelize.define('countrie', {
    name: {
      type: Sequelize.STRING
      
    },
    demonym:{
      type: Sequelize.STRING
    }
    
  },{
    timestamps:false
  });

  module.exports = Country