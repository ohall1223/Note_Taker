const router = require("express").Router()
const path = require("path");

// build out HTML routes

// notes
router.get('/notes', (req, res) => {
    // I want to respond with notes.html
    res.sendFile(path.join(__dirname, "../Develop/public/notes.html"));
})

router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, "../Develop/public/index.html"));
}) 

router.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, "../Develop/pubic/index.html"));
})

// index

module.exports = router;