
const Team = require('../models/Team')
const Selection =  require('../models/Selection')



exports.create = (req, res) => {
  Team.create({
    name: req.body.name,
    selectionId: req.body.selectionId
  }).then(submit => res.send(submit))
};


exports.findAll = async (req, res) => {
   await Team.findAll({
      include:[{model:Selection}]
    }).then(all =>   res.send(all))
};


exports.findOne = (req, res) => {
  Team.findAll({
    where:{
      id: req.params.id
    }
  }).then(single => res.send(single))
};

exports.update = (req, res) => {
  User.update({
    firstName: req.body.firstName,
    lastName: req.body.lastName
  },
  {
    where: { id: req.params.id }
  }).then(() => res.send("success"))
};


exports.delete = (req, res) => {
  User.destroy({
    where: {
      id: req.params.id
    }
  }).then(()=> res.send("success"))
};


exports.deleteAll = (req, res) => {
  
};
