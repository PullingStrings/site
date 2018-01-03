const Baby = require('../models/baby');

function babysIndex(req, res, next) {
  Baby
    .find()
    .exec()
    .then(babys => res.json(babys))
    .catch(next);
}

function babysCreate(req, res, next) {

  if(req.file) req.body.image = req.file.filename;

  Baby
    .create(req.body)
    .then(baby => res.status(201).json(baby))
    .catch(next);
}

function babysShow(req, res, next) {
  Baby
    .findById(req.params.id)
    .exec()
    .then((baby) => {
      if(!baby) return res.notFound();
      res.json(baby);
    })
    .catch(next);
}

function babysUpdate(req, res, next) {

  if(req.file) req.body.image = req.file.filename;

  Baby
    .findById(req.params.id)
    .exec()
    .then((baby) => {
      if(!baby) return res.notFound();
      baby = Object.assign(baby, req.body);
      return baby.save();
    })
    .then(baby => res.json(baby))
    .catch(next);
}

function babysDelete(req, res, next) {
  Baby
    .findById(req.params.id)
    .exec()
    .then((baby) => {
      if(!baby) return res.notFound();
      return baby.remove();
    })
    .then(() => res.status(204).end())
    .catch(next);
}

module.exports = {
  index: babysIndex,
  create: babysCreate,
  show: babysShow,
  update: babysUpdate,
  delete: babysDelete
};
