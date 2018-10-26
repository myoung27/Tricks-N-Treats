const Store = require('../models/Store')
const Product = require('../models/Product')

const productController = {
    index: (req, res) => {
        const storeId = req.params.storesId
        Store.findById(storeId).populate(`products`)
            .then(store => {
                console.log("STORE", store)
                const products = store.products
                res.send(products)
            })
    },
    show: (req, res) => {
        const productId = req.params.productsId
        Product.findById(productId)
            .then(product => {
                res.send(product)
            })
    }
}

module.exports = productController