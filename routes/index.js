const express = require('express')
const router = express.Router()
const userController = require('../controllers/users')
const neighborhoodsController = require('../controllers/neighborhoods')
const housesController = require('../controllers/houses')


//read routes 
router.get('/', userController.index)
router.get('/stores', neighborhoodsController.index)
router.get('/stores/new', neighborhoodsController.new)
router.get('/stores/:storesId/edit', neighborhoodsController.edit)
router.get('/stores/:storesId', neighborhoodsController.show)
router.get('/stores/:storesId/products', housesController.index)
router.get('/stores/:storesId/products/new', housesController.new)
router.get('/stores/:storesId/products/:productId', housesController.show)
router.get('/stores/:storesId/products/:productId/edit', housesController.edit)

//create routes
router.post('/stores', neighborhoodsController.create)
router.post('/stores/:storesId/products', housesController.create)

//delete routes 
router.delete('/stores/:storesId', neighborhoodsController.delete)
router.delete('/stores/:storesId/products/:productId', housesController.delete)

//update routes 
router.patch('/stores/:storesId', neighborhoodsController.update)
router.patch('/stores/:storesId/products/:productId', housesController.update)

module.exports = router