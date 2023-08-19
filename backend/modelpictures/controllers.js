const fs = require("fs");

const CARSPICTURE = require("./models");

exports.getAllPictures = (req, res) => {
  (async () => {
    try {
      const reponse = await CARSPICTURE.findAll();
      return res.status(200).json(reponse);
    } catch (error) {
      return res.status(404).send(error)
    }
  })();
};

exports.getOnePicture = (req, res) => {
  (async () => {
    try {
      const reponse = await CARSPICTURE.findOne({
        where: { modelCarsId: parseInt(req.params.id) },
      });
      return res.status(200).json({ reponse });
    } catch (error) {
      return res.status(404).send(error)
    }
  })();
};

exports.createPicture = (req, res) => {
  const newPicture = CARSPICTURE.build(req.body);
  const pictureFile = JSON.parse(JSON.stringify(req.files.modelPicture))[0];
  newPicture["pictureName"] = pictureFile.filename;
  (async () => {
    try {
      await newPicture.save();
      return res
        .status(201)
        .json({ message: "Picture save with successfully !" });
    } catch (error) {
      return res.status(500).send(error);
    }
  })();
};

exports.updatePicture = (req, res) => {
  (async () => {
    try {

    } catch (error) {
      
    }
  })();
};

exports.deletePicture = (req, res) => {
  (async () => {
    try {

    } catch (error) {
      
    }
  })();
};