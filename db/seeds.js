const Neighborhood = require('../models/Neighborhoods.js')
const Houses = require('../models/Houses.js')
const mongoose = require('./connections')

const l5p1 = new Houses({
    image: "https://www.out.com/sites/out.com/files/2018/09/18/xv6bjoklbzgp3mj2rbwn66dsxq.jpg",
    address: "123 Sesame St. NE",
    candy: "Yes",
    streetlight: "Yes"
})

const l5p2 = new Houses({
    image: "https://www.wehoville.com/wp-content/uploads/2013/02/1232324728.jpeg",
    address: "2424 Freddy Kruger Bld.",
    candy: "No",
    streetlight: "No"
})

const o4w1 = new Houses({
    image: "https://resources.stuff.co.nz/content/dam/images/1/q/5/g/j/c/image.related.StuffLandscapeSixteenByNine.710x400.1q5gq2.png/1527825065132.jpg",
    address: "6897 Sunshine Lane",
    candy: "Yes",
    streetlight: "Yes"
})

const o4w2 = new Houses({
    image: "https://waitingfornext-a.akamaihd.net/wp-content/uploads/2015/11/Screen-Shot-2015-11-17-at-8.07.14-PM.png",
    address: "4321 Halaburton Way",
    candy: "No",
    streetlight: "Yes"
})

const inp1 = new Houses({
    image: "https://waitingfornext-a.akamaihd.net/wp-content/uploads/2015/11/Screen-Shot-2015-11-17-at-8.07.14-PM.png",
    address: "35 King James Rd",
    candy: "Yes",
    streetlight: "Yes"
})

const inp2 = new Houses({
    image: "https://avatars.mds.yandex.net/get-pdb/25978/f30f17a8-fd5f-4aac-b57c-4c0484d987c4/s1200",
    address: "9038 Tasty Duck St.",
    candy: "No",
    streetlight: "Yes"
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