// build a class for store with methods that read json file, write, get, add and remove notes
const fs = require("fs")
const util = require("util");

const readFileAsync = util.promisify(fs.readFile)
const writeFileAsync = util.promisify(fs.writeFile)

// now I can use promise objects instead of callbacks
// es6 syntax

// get & post are required 

class Store {
    // read method 
    read() {
        return readFileAsync("db/db.json", "utf8");
    }

    getNotes() {
        return this.read().then((notes) => {
            // return parsed notes
        })
    }

    // create method
    addNote() {
        // add note to db.json
        return writeFileAsync("db/db.json", "utf8");
    }

    // delete method

    // update mehtod
}

// export a newly created object with methods on the prototype
module.exports = new Store();