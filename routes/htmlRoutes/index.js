const path = require('path');
const router = require('express').Router();

// /notes is called via router and accesses the notes.html
router.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, "../../public/notes.html"));
});

// / is declared for index.html via router
router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, "../../public/index.html"));
});

module.exports = router;