const express = require('express')
const router = express.Router()
const socioDemographicController = require('../controllers/socioDemographic.controller')

router.post('/', socioDemographicController.createSociodemographic)


module.exports = router