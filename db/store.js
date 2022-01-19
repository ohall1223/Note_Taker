// build a class for store with methods that read json file, write, get, add and remove notes
const util = require("util");
const fs = require("fs")
// const { v4: uuidv4 } = require('uuid'); 

const readFileAsync = util.promisify(fs.readFile)
const writeFileAsync = util.promisify(fs.writeFile)

// now I can use promise objects instead of callbacks
// es6 syntax

// get & post are required

var currentID = 1;

class Store {
    // read method 
    write(note) {
        return writeFileAsync("db/db.json", JSON.stringify(note));
    }
    read() {
        return readFileAsync("db/db.json", "utf8");
    }

    getNotes() {
        return this.read().then((notes) => {
            // return parsed notes
            let parsedNotes
            try {
                parsedNotes = [].concat(JSON.parse(note))
            } catch (err) {
                parsedNotes = [];
            }
            return parsedNotes;
        })
    }

    // create method
    addNote(note) {
        // add note to db.json
        const {title, text } = note;
        if(!title || !text) {
            console.log("Please fill in title & text");
        }
        const newNote = {title, text, id: currentID};

        return this.getNotes()
        .then(notes => [... notes, newNote])
        .then(updatedNotes => this.write(updatedNotes))
        .then(() => newNote)
    }

    // delete method
    deleteNote(id) {
        return this.getNotes()
            .then(notes=> notes.filter(note => note.id !== id))
            .then(filteredNotes => this.write(filteredNotes))
    }
}

// export a newly created object with methods on the prototype
module.exports = new Store();