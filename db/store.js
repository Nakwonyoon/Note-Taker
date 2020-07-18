const util = require("util");
const fs = require("fs");

const readFileAsync = util.promisify(fs.readFile);
const writeFileAsync = util.promisify(fs.writeFile);

class Store {
  constructor() {
    this.Id = 0;
  }

  read() {
    return readFileAsync("db/db.json", "utf8");
  }

  write(note) {
    return writeFileAsync("db/db.json", JSON.stringify(note));
  }

  getNotes() {
    return this.read().then(notes => {
      let parsedNotes;

      try {
        parsedNotes = [].concat(JSON.parse(notes));
      } catch (err) {
        parsedNotes = [];
      }

      return parsedNotes;
    });
  }

  addNote(data) {
    const { title, text } = data;

    const newdata = { title, text, id: ++this.Id };

    return this.getNotes()
      .then(notes => [...notes, newdata])
      .then(updatedNotes => this.write(updatedNotes))
      .then(() => newdata);
  }

  removeNote(id) {
    return this.getNotes()
      .then(notes => notes.filter(note => note.id !== parseInt(id)))
      .then(filteredNotes => this.write(filteredNotes));
  }
}

module.exports = new Store();