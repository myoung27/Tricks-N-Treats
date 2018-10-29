const Neighborhoods = require('../models/Neighborhoods')
const Houses = require('../models/Houses')

const housesController = {
    index: (req, res) => {
        const neighborhoodsId = req.params.neighborhoodsId
        Neighborhoods.findById(neighborhoodsId).populate(`houses`)
            .then(neighborhoods => {
                const houses = neighborhoods.houses
                res.render('houses/index', {
                    houses: houses,
                    neighborhoods: neighborhoods
                })
            })
    },
    show: (req, res) => {
        const housesId = req.params.housesId
        Houses.findById(housesId)
            .then(houses => {
                res.render('houses/show', {
                    houses: houses,
                })
            })
    },
    create: (req, res) => {
        const neighborhoodsId = req.params.neighborhoodsId
        Neighborhoods.findById(neighborhoodsId)
            .then(neighborhoods => {
                const houses = neighborhoods.houses
                Houses.create(req.body)
                    .then(newHouse => {
                        houses.push(newHouse)
                        neighborhoods.save()
                        res.redirect(`/neighborhoods/${neighborhoodsId}/houses/`, {
                            houses: houses,
                            neighborhoods: neighborhoods
                        })
                    })

            })
    },
    delete: (req, res) => {
        const neighborhoodsId = req.params.neighborhoodsId
        const housesId = req.params.housesId
        Houses.findByIdAndDelete(housesId)
            .then(() => {
                res.redirect(`/neighborhoods/${neighborhoodsId}`)
            })
    },
    update: (req, res) => {
        const neighborhoodsId = req.params.neighborhoodsId
        const housesId = req.params.housesId
        Houses.findByIdAndUpdate(housesId, req.body)
            .then(neighborhoods => {
                res.redirect(`/neighborhoods/${neighborhoodsId}/houses/${housesId}`)
            })
    },
    new: (req, res) => {
        const neighborhoodsId = req.params.neighborhoodsId
        Neighborhoods.findById(neighborhoodsId).populate(`houses`)
            .then(neighborhoods => {
                const houses = neighborhoods.houses
                res.render('houses/new', {
                    neighborhoods: neighborhoods,
                    houses: houses
                })
            })
    },
    edit: (req, res) => {
        res.render(`houses/edit`)
    }
}

module.exports = housesController