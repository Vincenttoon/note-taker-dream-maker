const router = require('express').Router();
const fs = require('fs');

router.get('api/notes', (req, res) => {
    console.log('should read the json and return saved notes');
});

router.post("/api/notes", (req, res) => {
    // should receive a new note to save on the request body,
    // add it to the json file,
    // return the new note to the client
    console.log('read above')
});

module.exports = router;