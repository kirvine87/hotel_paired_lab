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
  })


  return router;

}


module.exports = createRouter
