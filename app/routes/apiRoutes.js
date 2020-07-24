
const Note = require("../models/note");

module.exports = function(app){
app.get("/api/notes", function(req, res) {
  Note.findAll({}).then(function(results) {
    res.json(results);
  }).catch(err => res.status(500).json(err));
});

app.post("/api/notes", (req, res) => {
  console.log(req.body);
  console.log(req.params.id)
   Note.create({
    title: req.body.title,
      text: req.body.text,
   })
   res.status(204).end();
});

app.delete("/api/notes/:id", function(req, res) {
  console.log(req.params.id)
    Note.destroy({
      where: {
        id: req.params.id
      }
}).then((results) => res.json(results))
  .catch(err => res.status(500).json(err));
});
}

