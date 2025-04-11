// filepath: src/index.js
const express = require("express");
const userRoutes = require("./routes/userRoutes");

const app = express();

// Middleware para JSON
app.use(express.json());

// Rotas
app.use("/users", userRoutes);

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});
// filepath: src/index.js
require("dotenv").config();
const express = require("express");
const userRoutes = require("./routes/userRoutes");

const app = express();

app.use(express.json());
app.use("/users", userRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);

// filepath: src/index.js
const authRoutes = require("./routes/authRoutes");
app.use("/auth", authRoutes);

});
