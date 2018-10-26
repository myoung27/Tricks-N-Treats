const express = require('express')
const router = express.Router()
const userController = require('../controllers/users')
const neighborhoodsController = require('../controllers/neighborhoods')
const housesController = require('../controllers/houses')


//read routes 
router.get('/', userController.index)
router.get('/neighborhoods', neighborhoodsController.index)
router.get('/neighborhoods/new', neighborhoodsController.new)
router.get('/neighborhoods/:neighborhoodsId/edit', neighborhoodsController.edit)
router.get('/neighborhoods/:neighborhoodsId', neighborhoodsController.show)
router.get('/neighborhoods/:neighborhoodsId/products', housesController.index)
router.get('/neighborhoods/:neighborhoodsId/products/new', housesController.new)
router.get('/neighborhoods/:neighborhoodsId/products/:productId', housesController.show)
router.get('/neighborhoods/:neighborhoodsId/products/:productId/edit', housesController.edit)

//create routes
router.post('/neighborhoods', neighborhoodsController.create)
router.post('/neighborhoods/:neighborhoodsId/products', housesController.create)

//delete routes 
router.delete('/neighborhoods/:neighborhoodsId', neighborhoodsController.delete)
router.delete('/neighborhoods/:neighborhoodsId/products/:productId', housesController.delete)

//update routes 
router.patch('/neighborhoods/:neighborhoodsId', neighborhoodsController.update)
router.patch('/neighborhoods/:neighborhoodsId/products/:productId', housesController.update)

module.exports = router