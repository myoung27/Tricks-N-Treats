const express = require('express')
const router = express.Router()
const userController = require('../controllers/users')
const neighborhoodsController = require('../controllers/neighborhoods')
const housesController = require('../controllers/houses')


//routes for reading
router.get('/', userController.index)
router.get('/neighborhoods', neighborhoodsController.index)
router.get('/neighborhoods/new', neighborhoodsController.new)
router.get('/neighborhoods/:neighborhoodsId/edit', neighborhoodsController.edit)
router.get('/neighborhoods/:neighborhoodsId', neighborhoodsController.show)
router.get('/neighborhoods/:neighborhoodsId/houses', housesController.index)
router.get('/neighborhoods/:neighborhoodsId/houses/new', housesController.new)
router.post('/neighborhoods/:neighborhoodsId/houses', housesController.create)
router.get('/neighborhoods/:neighborhoodsId/houses/:housesId', housesController.show)
router.get('/neighborhoods/:neighborhoodsId/houses/:housesId/edit', housesController.edit)

//create routes
router.post('/neighborhoods', neighborhoodsController.create)


//delete routes 
router.delete('/neighborhoods/:neighborhoodsId', neighborhoodsController.delete)
router.delete('/neighborhoods/:neighborhoodsId/houses/:housesId', housesController.delete)

//update routes 
router.patch('/neighborhoods/:neighborhoodsId', neighborhoodsController.update)
router.patch('/neighborhoods/:neighborhoodsId/houses/:housesId', housesController.update)

module.exports = router