const express = require('express')
const router = express.Router()

const employeesController = require('../controllers/employees')


router.get('/controllers/employees', (req, res) => {
  
  res.json(user)
})

module.exports = router;