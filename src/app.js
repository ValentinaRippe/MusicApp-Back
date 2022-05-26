const express = require('express');
const app = express();
const cors = require('cors')

//Setings
app.set('port', process.env.PORT || 4000)

//Middlewares
app.use(cors());
app.use(express.json())

//routes
app.use('/api/songs', require('./routes/songs'))
app.use('/api/artists', require('./routes/artists'))
app.use('/api/genres', require('./routes/genres'))

module.exports = app
