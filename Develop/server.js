// Dependencies
const express = require("express");

// Sets up access to express object
const app = express();
var PORT = process.env.PORT || 3000;


app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

require("./apiRoutes.js")(app);
require("./htmlRoutes")(app);


// Starts the server to begin listening
app.listen(PORT, () => {
    console.log("App listening on http://localhost: " + PORT);
});
