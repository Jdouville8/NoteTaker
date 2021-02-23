const path = require("path");

module.exports = function(app) {

    // html route for notes.html
  app.get("/notes", (req, res) => {
    res.sendFile(path.join(__dirname, "/public/notes.html"));
  });

//   html route for index.html home page
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname + "/public/index.html"));
  });
};