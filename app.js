
// Requiring module
const express = require('express'); 
const path = require("path");
const port = 3000; 

// Creating express object
const app = express();
app.use("/public", express.static("public"));
// Handling GET request
app.get('/', (req, res) => { 
    res.sendFile(path.join(__dirname, "/src/index.html"));
}) 

// Port Number
const PORT = process.env.PORT ||5000;

// Server Setup
app.listen(port, () => console.log(`App listening on port http://localhost:${port}`))
