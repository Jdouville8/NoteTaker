const fs = require("fs");
let notesData = retrieveNotes();

function retrieveNotes() {
    let noteData = JSON.parse(fs.readFileSync('./db/db.json', 'utf8'));

    // Gives each note a unique ID
    for (let i = 0; i < noteData.length; i++) {
        noteData[i].id = '' + i;
    }

    return noteData;
}

module.exports = function (app) {

    app.get("/api/notes", (req, res) => {
        notesData = retrieveNotes();
        res.json(notesData);
    });

    app.post("/api/notes", (req, res) => {
        notesData.push(req.body);
        fs.writeFileSync('./db/db.json', JSON.stringify(notesData), 'utf8');
        res.json(true);
    });
};