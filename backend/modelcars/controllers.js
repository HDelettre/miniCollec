const ModelCars = require("./models");

exports.getAllModelCars = (req, res) => {
  (async () => {
    try {
      const reponse = await ModelCars.findAll();

      return res.status(200).send(reponse);

    } catch (error) {
      return res.status(400).json({message: "OBJETS NON TROUVES"});
    }
  })();
};

exports.getOneModelCars = (req, res) => {
  (async () => {
    try {
      const reponse = await ModelCars.find({
        where: {ModelCarsId: req.params.id}
      });

      return res.status(200).send(reponse);

    } catch (error) {return res.status(400).json({message: "OBJETS NON TROUVES"});}
  })();
};

exports.createModelCars = (req, res) => {
  
  (async ()=> {
    try {
      await ModelCars.create(req.body);
      return res.status(201).json("New model created !");
    } catch (error) {
      return res.status(500).send("Error during model creation");
    }
  })();

};

exports.updateModelCars = (req, res) => {
  (async () => {
    try {
      await ModelCars.update(req.body, {
        where : {
          modelCarsId: req.params.id
        }
      })

      return res.status(202).json("Model Modified !")
    } catch (error) {
      return res.status(500).send("Error during model modification !");
    }
  })();
};

exports.deleteModelCars = (req, res) => {
  (async () => {
    try {
      await ModelCars.destroy({
        where: {
          modelCarsId: req.params.id
        }
      })
      return res.status(201).json("Model Deleted !")
    } catch (error) {
      return res.status(500).send("Error during model deletion !");
    }
  })();
};
