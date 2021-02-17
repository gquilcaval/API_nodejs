
var Sequelize = require('sequelize')
var sequelize = require('../../db');
 

const Selection = sequelize.define('selection', {
    name: {
      type: Sequelize.STRING
      
    },
    cups:{
      type: Sequelize.INTEGER
    }
    
  },{
    timestamps:false
  });

  module.exports = Selection