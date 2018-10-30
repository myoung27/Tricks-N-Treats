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
        const neighborhoodsId = req.params.neighborhoodsId

        Neighborhoods.findById(neighborhoodsId).populate(`houses`).then((neighborhood) => {
            const housesId = req.params.housesId
            // console.log(housesId)
            Houses.findById(housesId)
                .then(houses => {
                    res.render('houses/show', {
                        houses: houses,
                        neighborhood: neighborhood
                    })
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
                        res.redirect(`/neighborhoods/${neighborhoodsId}/houses/`)
                    })

            })
    },
    delete: (req, res) => {
        const neighborhoodsId = req.params.neighborhoodsId
        const housesId = req.params.housesId
        Houses.findByIdAndDelete(housesId)
            .then(() => {
                res.redirect(`/neighborhoods`)
            })
    },
    update: (req, res) => {
        const neighborhoodsId = req.params.neighborhoodsId
        const housesId = req.params.housesId
        Houses.findByIdAndUpdate(housesId, req.body)
            .then(neighborhoods => {
                res.redirect(`/neighborhoods/${neighborhoodsId}/houses/${neighborhoods._id}`)
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
        console.log(req.params)
        Neighborhoods.findById(req.params.neighborhoodsId).then(neighborhoods => {
            Houses.findById(req.params.housesId).then((home) => {
                res.render(`houses/edit`, {
                    neighborhoods: neighborhoods,
                    home: home
                })
            })
        })
    }
}



module.exports = housesController