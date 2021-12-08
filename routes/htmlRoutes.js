const router = require("express").Router()
const path = require("path");

// build out HTML routes

// notes
router.get('/notes', (req, res) => {
    // I want to respond with notes.html
    res.sendFile(path.join(__dirname, "../public/notes.html"));
})

// index

module.exports = router;