const express = require("express");

const router = express.Router();

const ctrlPath = require("./controllers");

//
// ROUTES
//
router.get("/", ctrlPath.getAllPosts);
router.get("/:id", ctrlPath.getOnePost);
router.post("/", ctrlPath.createPost);
router.patch("/:id", ctrlPath.updatePost);
router.delete("/:id", ctrlPath.deletePost);

//
// EXPORTS
//
module.exports = router;