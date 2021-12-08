// dependencies 
const express = require("express");
const fs = require("fs");
const path = require("path");
const database = require("./db/db")

// express app

const app = express();
const PORT = process.env.PORT || 3001;

// link assets
app.use(express.static("public"));

// format to JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

fs.readFile(database, "utf8", (err, data) => {
    if(err) throw err

    var notes = JSON.parse(data)
  
    // GET notes route
    app.get("/api/notes", (req, res) => {
        res.json(notes);
    })

    // post to notes route
    app.post("/api/notes", (req, res) => {
        var filePath = path.join(_dirname, "/db/db.json");
        var newNote= req.body;
        
        notes.push(newNote);

        console.log("added new note: " + newNote.title)
        return;
    })
})

    app.listen(PORT, () => {
        console.log("App listening on port " + PORT)
    })


