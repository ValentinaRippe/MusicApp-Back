const songsCtrl = {};

const Songs = require("../models/Song");

songsCtrl.getSongs = async (req, res) => {
  try {
    const songs = await Songs.find();
    res.json(songs);
  } catch (err) {
    return res.status(500).json({ msg: err.message });
  }
};
songsCtrl.getSong = async (req, res) => {
  try {
    const songs = await Songs.findById(req.params.id);
    res.json(songs);
  } catch (err) {
    return res.status(500).json({ msg: err.message });
  }
};

songsCtrl.createSongs = async (req, res) => {
  try {
    const { name, image, gender, language, date, artistName, color, time } =
      req.body;
    const newSongs = new Songs({
      name,
      image,
      gender,
      language,
      date,
      artistName,
      color,
      time,
    });
    await newSongs.save();
    res.json("songs saved");
  } catch (err) {
    return res.status(500).json({ msg: err.message });
  }
};

songsCtrl.updateSongs = (req, res) => res.json({ message: "Update-songs" });

songsCtrl.deleteSongs = (req, res) => res.json({ message: "Delete" });

module.exports = songsCtrl;
