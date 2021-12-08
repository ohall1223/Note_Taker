// dependencies 
const express = require("express");
const fs = require("fs");
const path = require("path");
const database = require("./db/db")

// express app
const app = express();
const PORT = process.env.PORT || 3001;

let notes = []

// link assets
app.use(express.static("public"));

// middleware 
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
  
// app.get("/", (req, res) => {
//     res.sendFile(path.join(__dirname, "index.html"));
// })

// app.get("/api/notes", (req, res) => {
//     notes = fs.readFileSync("database")
//     res.json(notes)
// })

// app.post("/api/notes", (req, res) => {
//     notes = fs.read(database)
//     console.log(notes)
//     notes = JSON.parse(notes);
//     req.body.id = notes.length;
//     notes.push(req.body);
//     notes = JSON.stringify(notes)
//     fs.writeFile(database, notes, (err) => {
//         if(err)
//         throw err
//     })
//     res.json(JSON.parse(notes))
// })

app.listen(PORT, () => {
    console.log(`Example app listening at http://localhost:${PORT}`)
})


