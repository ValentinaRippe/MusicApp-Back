const { Schema, model } = require('mongoose')

const artistSchema = new Schema({
    name: String,
    songs: Array,
    description: String
})

module.exports = model('Genre', artistSchema)