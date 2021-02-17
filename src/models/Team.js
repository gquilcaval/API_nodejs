
var Sequelize = require('sequelize')
var sequelize = require('../../db');
 

const Group = sequelize.define('team', {
    name: {
      type: Sequelize.STRING
      
    }
    
  },{
    timestamps:false
  });

  module.exports = Group