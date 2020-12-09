const express = require('express');
const Cars = require('./car-model')
const router = express.Router();

//get all Cars
router.get('/', (req, res) => {
    Cars.get()
      .then(cars => {
        res.status(200).json(cars);
      })
      .catch(() => {
        res.status(500).json({
          error: "oogabooga"
        });
      });
  });

//get Cars by ID
router.get('/:id',  (req, res) => {
    Cars.get(req.params.id)
    .then(car => {
      res.status(200).json(car);
    })
    .catch(() => {
      res.status(500).json({
        error: "The action information could not be retrieved."
      });
    });
});

module.exports = router;