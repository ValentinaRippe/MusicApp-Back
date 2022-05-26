const artistsCtrl = {};

const Artist = require("../models/Artist");

artistsCtrl.getArtists = async (req, res) => {
  try {
    const artists = await Artist.find();
    res.json(artists);
  } catch (err) {
    return res.status(500).json({ msg: err.message });
  }
};
artistsCtrl.getArtist = async (req, res) => {
  try {
    const artist = await Artist.findById(req.params.id);
    res.json(artist);
  } catch (err) {
    return res.status(500).json({ msg: err.message });
  }
};

artistsCtrl.createArtists = async (req, res) => {
  try {
    const { name, age, image, gender, language, songs, description } = req.body;
    const newArtist = new Artist({
      name,
      age,
      image,
      gender,
      language,
      songs,
      description,
    });
    await newArtist.save();
    res.json("Artist saved");
  } catch (err) {
    return res.status(500).json({ msg: err.message });
  }
};

artistsCtrl.updateArtists = (req, res) => res.json("Update-Artist");

artistsCtrl.deleteArtists = (req, res) => res.json("Delete-Artist");

module.exports = artistsCtrl;
