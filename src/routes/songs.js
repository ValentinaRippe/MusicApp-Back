const { Router } = require("express");
const router = Router();

const { getSongs, createSongs, getSong, updateSongs, deleteSongs } = require('../controllers/songs.controller')

router.route('/')
  .get(getSongs)
  .post(createSongs);

router.route("/:id")
  .get(getSong)
  .put(updateSongs)
  .delete(deleteSongs);

module.exports = router;
