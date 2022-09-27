const router = require("express").Router();
const fs = require("fs");
const notes = require("../../db/db.json");
const { createNote, deleteNote, validateNote } = require("../../lib/notes");

// gets previously saved notes
router.get("/notes", (req, res) => {
  let results = notes;

  res.json(results);
});

// allows user to post new notes
router.post("/notes", (req, res) => {
  let allNotes = createNote(req.body, notes);

//   validates notes are in proper format for saving
  validateNote(allNotes);

  res.json(allNotes);
});

// deletes notes one at a time
router.delete("/notes/:id", (req, res) => {
    deleteNote(notes, req.params.id);
    res.json(notes);
})

module.exports = router;
