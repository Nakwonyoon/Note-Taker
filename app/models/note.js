
const Sequelize = require("sequelize");
const sequelize = require("../config/connection.js");

const  Note = sequelize.define("note", {
  title: Sequelize.STRING,
  text: Sequelize.STRING,
}, {
  freezeTableName: true
});

// Syncs with DB
Note.sync();

// Makes the Character Model available for other files (will also create a table)
module.exports = Note;
