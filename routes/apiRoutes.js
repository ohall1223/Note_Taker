const router = require("express").Router()
const { request } = require("http");
const store = require("../Develop/db/store")


// route handlers
// route to get all notes
router.get("/notes", (req, res) => {
    store.getNotes()
    .then((notes) => 
        res.json(notes)
    )
    .catch(err => res.status(500).json(err))
});

// route to post a new note
router.post("/notes", (req, res) => {
    store.addNote(req.body)
    // data will be stored that came from the front end on req.body
    .then((note) => 
        res.json(note)
    )
    .catch(err => res.status(500).json(err))
})

// route to delete a specific note
router.delete('/notes/:id', (req, res) => {
    store.deleteNote(req.params.id)
    .then(() => res.json({ok: true}))
    .catch(err => res.status(500).json(err))
})

module.exports = router;