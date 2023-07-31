const express = require("express");

const router = express.Router();

const ctrlPath = require("./controllers");

//
// ROUTES
//
router.get("/", ctrlPath.getAllPictures);
router.get("/:id", ctrlPath.getOnePicture);
router.post("/", ctrlPath.createPicture);
router.patch("/:id", ctrlPath.updatePicture);
router.delete("/:id", ctrlPath.deletePicture)

//
// EXPORTS
//
module.exports = router;