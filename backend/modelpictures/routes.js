const express = require("express");

const multer = require("../config/multer");

const router = express.Router();

const ctrlPath = require("./controllers");

//
// ROUTES
//
router.get("/", ctrlPath.getAllPictures);
router.get("/:id", ctrlPath.getOnePicture);
router.post("/",multer, ctrlPath.createPicture);
router.patch("/:id",multer, ctrlPath.updatePicture);
router.delete("/:id", ctrlPath.deletePicture)

//
// EXPORTS
//
module.exports = router;