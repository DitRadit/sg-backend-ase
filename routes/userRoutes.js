const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController")

// GET all users
router.get("/", userController.getUsers);

// GET user by ID
router.get("/:id", userController.getUserById);

// CREATE user
router.post("/", userController.createUser);


module.exports = router;