const router = require("express").Router();
const fs = require("fs");
const notes = require("../../db/db.json");
const { createNote, validateNote } = require("../../lib/notes");

router.get("/notes", (req, res) => {
  let results = notes;
  // should read the db.json file and return all saved notes as JSON.

  res.json(results);
});

router.post("/notes", (req, res) => {
  let allNotes = createNote(req.body, notes);

  res.json(allNotes);
  // should receive a new note to save on the request body,
  // add it to the json file,
  // return the new note to the client
});

module.exports = router;
