const express = require("express");
const app = express();
const PORT = 3000;


app.get("/", (request, response) => {
    response.status(200).send("This is the home page!--")
});

app.listen(PORT, console.log("Server running on port "+PORT));