// controllers/userController.js
const User = require("../models/userModel");

// GET all users
exports.getUsers = (req, res) => {
    res.json(User.findAll());
};

// GET user by id
exports.getUserById = (req, res) => {
    const id = parseInt(req.params.id);
    const user = User.findOne(id);

    if (!user) {
        return res.status(404).json({ message: "User not found" });
    }
    res.json(user);
};

// CREATE user
exports.createUser = (req, res) => {
    const { id, nama } = req.body;

    if (!id || !nama) {
        return res.status(400).json({ message: "id dan nama harus diisi" });
    }

    const newUser = { id, nama };
    User.create(newUser);
    res.status(201).json(newUser);
};

