const express = require("express");

const router = express.Router();

const ctrlPath = require("./controllers");

//
// ROUTES
//
router.post("/signup", ctrlPath.createUser);
router.post("/login", ctrlPath.loginUser);
router.get("/logout/:id", ctrlPath.logoutUser);

router.get("/", ctrlPath.getAllUsers);
router.get("/:id", ctrlPath.getOneUser);
router.patch("/:id", ctrlPath.updateUser);
router.delete("/:id", ctrlPath.deleteUser);

//
// EXPORTS
//
module.exports = router;