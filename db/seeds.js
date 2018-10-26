const Neighborhood = require('../models/Neighborhood.js')
const Houses = require('../models/Houses.js')
const mongoose = require('./connections')

const l5p1 = new Houses({
    address: "123 Sesame St. NE",
    price: true,
    streetlight: true
})

const l5p2 = new Houses({
    address: "2424  Freddy Kruger Bld.",
    candy: false,
    streetlight: false
})

const o4w1 = new Houses({
    address: "6897 Sunshine Lane",
    candy: true,
    streetlight: true
})

const o4w2 = new Houses({
    address: "4321 Halaburton Way",
    candy: false,
    streetlight: true
})

const inp1 = new Houses({
    address: "35 King James Rd",
    candy: true,
    streetlight: true
})

const inp2 = new Houses({
    address: "9038 Tasty Duck St.",
    candy: false,
    streetlight: true
})



const inmanPark = new Neighborhood({
    name: "Inman Park",
    houses: [inp1, inp2]
})
const l5P = new Neighborhood({
    name: "Little Five Points",
    houses: [l5p1, l5p2]
})

const old4thWard = new Neighborhood({
    name: "Old 4th Ward",
    houses: [o4w1, o4w2]
})

Neighborhood.remove({})
    .then(() => Houses.insertMany([inp1, inp2, l5p1, l5p2, o4w1, o4w2]))
    .then(() => inmanPark.save())
    .then(() => l5P.save())
    .then(() => old4thWard.save())
    .then(() => console.log("Database seeded success"))
    .then(() => mongoose.connection.close())