const express = require("express");

const router = express.Router();

const ctrlPath = require("./controllers");

//
// ROUTES
//
router.get("/", ctrlPath.getAllModelCars);
router.get("/:id", ctrlPath.getOneModelCars);
router.post("/", ctrlPath.createModelCars);
router.patch("/:id", ctrlPath.updateModelCars);
router.delete("/:id", ctrlPath.deleteModelCars);

//
// EXPORTS
//
module.exports = router;