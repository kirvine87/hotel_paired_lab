const express = require('express');
const ObjectID = require('mongodb').ObjectID;
const dealWithError = function(err, res) {
  res.status(500);
  res.json({status: 500, error: err});
};

const createRouter = function (collection) {

  const router = express.Router();

  //INDEX
  router.get('/', (req, res) => {
    collection
    .find()
    .toArray()
    .then((docs) => res.json(docs))
    .catch((err) => {
      dealWithError(err, res)
    })
  });

  //SHOW
  router.get('/:id', (req, res) => {
    const id = req.params.id;
    collection.findOne({ _id: ObjectID(id) })
    .then((doc) => res.json(doc))
    .catch((err) => {
      dealWithError(err, res)
    })
  });

  //CREATE
  router.post('/', (req, res) => {
    const newBooking = req.body;
    collection.insertOne(newBooking)
    .then((result) => {
      res.json(results.ops[0])
    })
    .catch((err) => {
      dealWithError(err, res)
    })
  });


  return router;

}


module.exports = createRouter
