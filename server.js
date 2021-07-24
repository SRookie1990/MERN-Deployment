// Express and Cors imports
const express = require('express');
const cors = require('cors');

const app = express();


// Config middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));

// Require must come after app.use
require("./server/config/mongoose");
const AuthorRoutes = require("./server/routes/pet.routes");
AuthorRoutes(app);

app.listen(8000, () => {
    console.log("The server is all fired up on port 8000");
})