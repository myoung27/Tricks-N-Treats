const Neighborhoods = require(`../models/Neighborhoods`)

const neighborhoodsController = {
    index: (req, res) => {
        Neighborhoods.find({}).populate(`houses`)
            .then(neighborhoods => {
                res.render('neighborhoods/index', {
                    neighborhoods: neighborhoods
                })
            })
    },
    show: (req, res) => {
        const neighborhoodsId = req.params.neighborhoodsId
        Neighborhoods.findById(neighborhoodsId).populate(`houses`)
            .then((single) => {
                console.log(single)
                res.render('neighborhoods/show', {
                    single: single

                })
            })
    },
    create: (req, res) => {
        Neighborhoods.create(req.body)
            .then(() => {
                res.redirect(`/neighborhoods`)
            })
    },
    delete: (req, res) => {
        const neighborhoods = req.params.neighborhoodsId
        Neighborhoods.findByIdAndDelete(neighborhoods)
            .then(() => {
                res.redirect(`/neighborhoods`)
            })
    },
    update: (req, res) => {
        const neighborhoodsId = req.params.neighborhoodsId
        Neighborhoods.findByIdAndUpdate(neighborhoodsId, req.body)
            .then((neighborhoods) => {
                res.redirect(`/neighborhoods/${neighborhoods.id}`)
            })
    },
    new: (req, res) => {
        res.render(`neighborhoods/new`)
    },
    edit: (req, res) => {
        res.send(`Hellow from Stores Edit route`)
    }
}

module.exports = neighborhoodsController