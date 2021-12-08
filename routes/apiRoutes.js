const router = require("express").Router()
const { request } = require("http");
const store = require("../Develop/db/store")


// route handlers
// route to get all notes
router.get("/notes", (req, res) => {
    store.getNotes().then((notes) => {
        return res.json(notes);
    });
});

// route to post a new note

// route to get a specific note

// route to delete a specific note

// route to updata a note

module.exports = router;