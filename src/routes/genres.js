const { Router } = require("express");
const router = Router();

const {getGenres, createGenres, getGenre, updateGenres, deleteGenres} = require('../controllers/genres.controller')

router .route('/')
    .get(getGenres)
    .post(createGenres);

router.route("/:id")
  .get(getGenre)
  .put(updateGenres)
  .delete(deleteGenres);

module.exports = router;
