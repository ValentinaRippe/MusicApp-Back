const genresCtrl = {};

const Genre = require("../models/Genre");

genresCtrl.getGenres = async (req, res) => {
  try {
    const genres = await Genre.find();
    res.json(genres);
  } catch (err) {
    return res.status(500).json({ msg: err.message });
  }
};
genresCtrl.getGenre = async (req, res) => {
  try {
    const genre = await Genre.findById(req.params.id);
    res.json(genre);
  } catch (err) {
    return res.status(500).json({ msg: err.message });
  }
};

genresCtrl.createGenres = async (req, res) => {
  try {
    const { name, songs, description } = req.body;
    const newgenre = new Genre({
      name,
      songs,
      description,
    });
    await newgenre.save();
    res.json("Genre saved");
  } catch (err) {
    return res.status(500).json({ msg: err.message });
  }
};

genresCtrl.updateGenres = (req, res) => res.json("Genre");

genresCtrl.deleteGenres = (req, res) => res.json("Genre");

module.exports = genresCtrl;
