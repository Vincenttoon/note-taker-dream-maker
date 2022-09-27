const fs = require('fs');
const path = require('path');
const { notes } = require('../db/db.json');
const uniqid = require('uniqid');

function createNote(body, notesArray) {
    const note = body
    note.id = uniqid();
    notesArray.push(note);
    fs.writeFileSync(
        path.join(__dirname, '../db/db.json'),
        JSON.stringify(notesArray)
    );
    return notesArray;
}

function validateNote(note) {
    if (!note.title || typeof note.title !== "string") {
        return false;
    }
    if (!note.text || typeof note.text !== "string") {
        return false;
    }
    return true;
}

function deleteNote(param, param) {
    // this should delete the notes with a trash icon
}

module.exports = { createNote, validateNote }