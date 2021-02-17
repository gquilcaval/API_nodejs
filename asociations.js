const Selection = require('./src/models/Selection');
const Coach = require('./src/models/Coach');
const Country = require('./src/models/Country');
const Player = require('./src/models/Player');
const Team = require('./src/models/Team');

/*RELACION SELECTION , COUNTRY,COACH,TEAM */
Selection.hasMany(Player)
Player.belongsTo(Selection)
/** */
Selection.belongsTo(Country)
Country.hasMany(Selection)
/** */
Selection.belongsTo(Coach)
Coach.hasOne(Selection)
/** */
Selection.belongsTo(Team)
Team.hasMany(Selection)
/*RELACION COACH AND COUNTRY*/
Country.hasMany(Coach)
Coach.belongsTo(Country)

