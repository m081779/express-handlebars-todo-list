const Task = require('../models/task');

module.exports = {
  findAll: function (req,res){
    Task
    .find({})
    .then(result =>  res.render('index', {tasks: result}))
    .catch(err => res.json(err))
  },

  create: function(req,res){
    Task
    .create(req.body)
    .then(result => res.json(result))
    .catch(err => res.json(err));
  },

  findOne: function (req,res){
    Task
    .findOne({_id: req.params.id})
    .then(result => res.render('edit', result))
    .catch(err => res.json(err))
  },

  complete: function (req,res){
    Task
    .findOneAndUpdate({_id: req.params.id}, {completed: true})
    .then(result => res.json(result))
    .catch(err => res.json(err))
  },

  deleteOne: function (req,res){
    Task
    .remove({_id: req.params.id})
    .then(result => res.json(result))
    .catch(err => res.json(err))
  },

  updateName: function (req,res){
    Task
    .findOneAndUpdate({_id: req.body._id}, {task: req.body.task})
    .then(result => res.json(result))
    .catch(err => res.json(err))
  }
}

