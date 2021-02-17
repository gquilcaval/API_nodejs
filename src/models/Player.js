
var Sequelize = require('sequelize')
var sequelize = require('../../db');
 

const Player = sequelize.define('player', {
    name: {
      type: Sequelize.STRING
      
    },
    nickname:{
      type: Sequelize.STRING
    },
    birth_date:{
        type: Sequelize.DATE
    }
    
  },{
    timestamps:false
  });

  module.exports = Player