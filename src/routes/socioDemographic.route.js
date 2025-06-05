const express = require('express')
const router = express.Router()
const socioDemographicController = require('../controllers/socioDemographic.controller')

router.post('/', socioDemographicController.createSociodemographic);
router.get('/states', socioDemographicController.getStates);
router.get('/states/:state/cities', socioDemographicController.getCities);


module.exports = router;