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

function deleteNote(notesArray, id) {
    const deleteFunc = parseInt(id);
    notesArray.splice(deleteFunc, 1)

    for (let i = deleteFunc; i < notesArray.length; i++){
        notesArray[i].id = i.toString();     
    }

    fs.writeFileSync(
        path.join(__dirname, "../db/db.json"),
        JSON.stringify(notesArray)
    );
    
}

module.exports = { createNote, validateNote, deleteNote }