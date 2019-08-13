const express = require('express')
const knex = require('knex')

const knexConfig = require('../knexfile.hs')

const db = knex(knexConfig.development)

const router = express.Router()

router.get('/', async (request, response) => {
  
})