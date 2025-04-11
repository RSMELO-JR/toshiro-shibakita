// filepath: src/controllers/authController.js
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

const users = []; // Simulação de banco de dados

const register = async (req, res) => {
    const { name, email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    users.push({ id: Date.now(), name, email, password: hashedPassword });
    res.status(201).json({ message: "Usuário registrado com sucesso!" });
};

const login = async (req, res) => {
    const { email, password } = req.body;
    const user = users.find((u) => u.email === email);
    if (!user || !(await bcrypt.compare(password, user.password))) {
        return res.status(401).json({ message: "Credenciais inválidas" });
    }
    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: "1h" });
    res.json({ token });
};

module.exports = { register, login };
