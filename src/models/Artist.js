const { Schema, model } = require('mongoose')

const artistSchema = new Schema({
    name: String,
    age: Number,
    image: String,
    gender: String,
    language: String,
    songs: Array,
    description: String
})

module.exports = model('Artist', artistSchema)