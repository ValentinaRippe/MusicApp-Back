const { Schema, model } = require('mongoose')

const songSchema = new Schema({
    name: String,
    image: String,
    gender: String,
    language: String,
    date: String,
    artistName: String,
    color: String,
    time: String
})

module.exports = model('Song', songSchema)