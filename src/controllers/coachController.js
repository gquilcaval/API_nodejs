
const Coach = require('../models/Coach')
const Country = require('../models/Country')


exports.create = (req, res) => {
    Coach.create({
    name: req.body.name,
    demonym: req.body.demonym
  }).then(submit => res.send(submit))
};


exports.findAll = (req, res) => {
    Coach.findAll({include:{model: Country}}).then(all => res.send(all))
};


exports.findOne = (req, res) => {
  User.findAll({
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

