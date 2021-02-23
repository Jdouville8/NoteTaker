const fs = require("fs");
let notesData = retrieveNotes();

// Function for retrieving note data upon page initialization and when a new note is written
function retrieveNotes() {
    // Gets note data from db file where it is being stored and parses it into an array of objects
    let noteData = JSON.parse(fs.readFileSync('./db/db.json', 'utf8'));

    // Gives each note a unique ID key value pair
    // ID is written once a new note is created, the most recently created note will not contain an ID
    for (let i = 0; i < noteData.length; i++) {
        noteData[i].id = `${i}`;
    }

    return noteData;
}

// Exports function to be used in server.js
module.exports = function (app) {

    // retrieves notes from db file and displays to page
    app.get("/api/notes", (req, res) => {
        notesData = retrieveNotes();
        res.json(notesData);
    });

    // retrieves new notes data from page 
    app.post("/api/notes", function (req, res) {
        notesData.push(req.body);
        fs.writeFileSync('./db/db.json', JSON.stringify(notesData), 'utf8');
        res.json(true);
    });
};