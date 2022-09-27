const router = require("express").Router();
const fs = require("fs");
const notes = require("../../db/db.json");
const { createNote, deleteNote } = require("../../lib/notes");

router.get("/notes", (req, res) => {
  let results = notes;

  res.json(results);
});

router.post("/notes", (req, res) => {
  let allNotes = createNote(req.body, notes);

  res.json(allNotes);
});

router.delete("/notes/:id", (req, res) => {
    deleteNote(notes, req.params.id);
    res.json(notes);
})

module.exports = router;
