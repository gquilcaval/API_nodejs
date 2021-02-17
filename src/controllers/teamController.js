
const Team = require('../models/Team')
const Selection =  require('../models/Selection')


// Create and Save a new Tutorial
exports.create = (req, res) => {
  Team.create({
    name: req.body.name,
    selectionId: req.body.selectionId
  }).then(submit => res.send(submit))
};

// Retrieve all Tutorials from the database.
exports.findAll = async (req, res) => {
   await Team.findAll({
      include:[{model:Selection}]
    }).then(all =>   res.send(all))
};

// Find a single Tutorial with an id
exports.findOne = (req, res) => {
  Team.findAll({
    where:{
      id: req.params.id
    }
  }).then(single => res.send(single))
};

// Update a Tutorial by the id in the request
exports.update = (req, res) => {
  User.update({
    firstName: req.body.firstName,
    lastName: req.body.lastName
  },
  {
    where: { id: req.params.id }
  }).then(() => res.send("success"))
};

// Delete a Tutorial with the specified id in the request
exports.delete = (req, res) => {
  User.destroy({
    where: {
      id: req.params.id
    }
  }).then(()=> res.send("success"))
};

// Delete all Tutorials from the database.
exports.deleteAll = (req, res) => {
  
};

// Find all published Tutorials
exports.findAllPublished = (req, res) => {
  
};