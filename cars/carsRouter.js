const express = require('express')
const knex = require('knex')

const knexConfig = require('../knexfile.js')

const db = knex(knexConfig.development)

const router = express.Router()

router.get('/', (request, response) => {
  db('cars')
    .then(cars => {
      response.status(200).json(cars);
      console.log(cars)
    })
    .catch(error => {
      console.log(error)
      response.status(500).json({ message: 'error getting the cars from db' });
    });
});

router.get('/:carid', (request, response) => {
  db('car-dealer')
  .where({ id: request.params.id })
  .first()
  .then(car => {
    response.status(200).json(car);
  })
  .catch(error => {
    console.log(error)
    response.status(500).json({ message: 'error getting the car from db' });
  });
});

router.post('/', (request, response) => {
  const car = request.body;

  db('cars')
    .insert(car, 'id')
    .then(car => {
      response.status(202).json(car);
    })
    .catch(error => {
      console.log(error)
      response.status(500).json({ message: 'error saving the car to the db' });
    });
});

module.exports = router;
