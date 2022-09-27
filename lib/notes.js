const fs = require('fs');
const path = require('path');
const notes = require('../db/db.json');
// allows application of uniqid npm package to assign to new notes
const uniqid = require('uniqid');

// function to create notes
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

// validate note function.
function validateNote(note) {
    if (!note.title || typeof note.title !== "string") {
        return false;
    }
    if (!note.text || typeof note.text !== "string") {
        return false;
    }
    return true;
}

// function to delete notes
function deleteNote(notesArray, id) {
    const deleteFunc = parseInt(id);
    // how to fix this splice... ^^^ vvv
    notesArray.splice(deleteFunc, 1)
    // 1 represents how many can be deleted, which is correct. Maybe parseInt is the problem


    // I believe this array is not necessary vvv
    // for (let i = notesArray; i < notesArray.length; i++){
    //     notesArray[i].id = i.toString();     
    // }

    // rewrites notes array after deletion
    fs.writeFileSync(
        path.join(__dirname, "../db/db.json"),
        JSON.stringify(notesArray)
    );
    
}

module.exports = { createNote, validateNote, deleteNote }