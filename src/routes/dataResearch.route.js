const express = require('express')
const router = express.Router()
const dataResearchController = require('../controllers/dataResearch.controller')
const exportExel = require('../controllers/export.controller')
const authMiddleware = require('../middlewares/auth.middleware')

router.post('/', dataResearchController.create)
router.get('/', authMiddleware, dataResearchController.getAll)
router.get('/export', authMiddleware, exportExel.exportExcel)
router.get('/countAnswers', dataResearchController.countAnswers)
router.get('/:id', dataResearchController.getById)
router.delete('/:id', dataResearchController.deleteResearch)

module.exports = router
