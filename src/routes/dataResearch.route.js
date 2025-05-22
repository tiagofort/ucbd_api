const express = require('express')
const router = express.Router()
const dataResearchController = require('../controllers/dataResearch.controller')

router.post('/', dataResearchController.create);
router.get('/', dataResearchController.getAll);
router.get('/:id', dataResearchController.getById);

module.exports = router;