// dependencies 
const express = require("express");
const fs = require("fs");
const path = require("path");
const db = require("./db/db.json");
const { request } = require("http");
const htmlRoutes = require("../routes/htmlRoutes")

// express app
const app = express();
const PORT = 3001;

let notes = []

// link assets
app.use(express.static("public"));

// middleware 
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.get("/", (req, res) => {
    // interact with the database table of users to retieve an array of objects
    db.query("SELECT * FROM notes", (err, data) => {
        // got data back, what now?
        res.json(data);
    })
    // res.sendFile(path.join(__dirname, "index.html"));
})

app.post("/notes", (req, res) =>{
    const newNote = req.body;

    // console.log(req.body)
    db.query("INSERT INTO notes VALUES (?, ?)", (err, data) => {
        if(err) {
            console.log(err)
        }
        res.json(newNote);
    })
})

// app.get("/api/notes", (req, res) => {
//     notes = fs.readFileSync(db)
//     res.json(notes)
// })

// app.post("/api/notes", (req, res) => {
//     notes = fs.read(db)
//     console.log(notes)
//     notes = JSON.parse(notes);
//     req.body.id = notes.length;
//     notes.push(req.body);
//     notes = JSON.stringify(notes)
//     fs.writeFile(db, notes, (err) => {
//         if(err)
//         throw err
//     })
//     res.json(JSON.parse(notes))
// })

app.listen(PORT, () => {
    console.log(`Example app listening at http://localhost:${PORT}`)
})


