const { Router } = require('express')
const router = Router();

const {getArtists, createArtists, getArtist, updateArtists, deleteArtists} = require('../controllers/artists.controller')

router .route('/')
    .get(getArtists)
    .post(createArtists);

router.route("/:id")
  .get(getArtist)
  .put(updateArtists)
  .delete(deleteArtists); 

module.exports = router;