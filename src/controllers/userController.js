// filepath: src/controllers/userController.js
const getUsers = (req, res) => {
    res.json([{ id: 1, name: "Toshiro", email: "toshiro@example.com" }]);
};

const createUser = (req, res) => {
    const { name, email } = req.body;
    res.status(201).json({ id: Date.now(), name, email });
};

module.exports = { getUsers, createUser };
