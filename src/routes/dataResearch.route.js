const express = require('express')
const router = express.Router()
const dataResearchController = require('../controllers/dataResearch.controller')
const authMiddleware = require('../middlewares/auth.middleware');

router.post('/', dataResearchController.create);
router.get('/', authMiddleware, dataResearchController.getAll);
router.get('/:id', dataResearchController.getById);

module.exports = router;