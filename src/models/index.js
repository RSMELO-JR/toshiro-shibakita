// filepath: src/models/index.js
const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(process.env.DATABASE_URL, {
    dialect: "mysql",
});

module.exports = sequelize;
