const router = require('express').Router();
const fs = require('fs');
const { notes } = require('../../db/db.json');
const { createNote, validateNote } = require('../../lib/notes');


router.get('api/notes', (req, res) => {
    let results = notes
    // should read the db.json file and return all saved notes as JSON.
    if (req.query) {
        results = validateNote(req.query, results);
    }
    res.json(results);
});

router.post("/api/notes", (req, res) => {
    // should receive a new note to save on the request body,
    // add it to the json file,
    // return the new note to the client
    console.log('read above')
});

module.exports = router;