
const Sequelize = require("sequelize");

const sequelize = new Sequelize("note", "root", "skrdnjs1", {
  host: "localhost",
  port: 3306,
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    idle: 10000
  }
});

// Exports the connection for other files to use
module.exports = sequelize;