const USER = require("./models");

exports.createUser = (req, res) => {
  (async () => {
    try {
      await USER.create(req.body);

      return res.status(200).json({message: "New user created with success !!"});

    } catch (error) {return res.status(400).json({message: "Error during user creation !"});}
  })();
};

exports.loginUser = (req, res) => {
  (async () => {
    try {
      const reponse = await USER.find({
        where: {userId: req.params.id}
      });

      return res.status(200).send(reponse);

    } catch (error) {return res.status(400).json({message: "Error during user connection !"});}
  })();
};

exports.logoutUser = (req, res) => {
  (async () => {
    try {

      return res.status(200).json({message: "User deconnected !"})

    } catch (error) {return res.status(400).json({message: "Error during deconnection !"});}
  })();
};

exports.getAllUsers = (req, res) => {
  (async () => {
    try {
      const reponse = await USER.findAll();
      return res.status(200).send(reponse);

    } catch (error) {return res.status(400).json({message: "Error get ALL"});}
  })();
};

exports.getOneUser = (req, res) => {
  (async () => {
    try {
      const reponse = await USER.find({
        where: {ModelCarsId: req.params.id}
      });

      return res.status(200).send(reponse);

    } catch (error) {return res.status(400).json({message: "OBJETS NON TROUVES"});}
  })();
};

exports.updateUser = (req, res) => {
  (async () => {
    try {
      const reponse = await USER.find({
        where: {ModelCarsId: req.params.id}
      });

      return res.status(200).send(reponse);

    } catch (error) {return res.status(400).json({message: "OBJETS NON TROUVES"});}
  })();
};

exports.deleteUser = (req, res) => {
  (async () => {
    try {
      const reponse = await USER.find({
        where: {ModelCarsId: req.params.id}
      });

      return res.status(200).send(reponse);

    } catch (error) {return res.status(400).json({message: "OBJETS NON TROUVES"});}
  })();
};
