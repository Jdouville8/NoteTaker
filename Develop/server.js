// requiring modules
const express = require("express");

// Sets up access to express object
const app = express();
var PORT = process.env.PORT || 3000;


app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

// routes for the html navigation and data read/writing
// api routes has to be first or code will not work (probably because files need to be read and written before html is called)
require("./apiRoutes.js")(app);
require("./htmlRoutes")(app);


// Server listener for port 3000
app.listen(PORT, () => {
    console.log("App listening on http://localhost: " + PORT);
});
