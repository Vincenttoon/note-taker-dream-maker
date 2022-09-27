// routes required for server
const apiRoutes = require("./routes/apiRoutes");
const htmlRoutes = require("./routes/htmlRoutes");

// npm packages required
const express = require('express');
const path = require('path');
const fs = require('fs');

// create variable to use express and landing port for page
const app = express();
const PORT = process.env.PORT || 3002;


app.use(express.static("public"));
// parse incoming string or array data
app.use(express.urlencoded({ extended: true }));
// parse incoming JSON data
app.use(express.json());

// http route for notes pages with api
app.use("/api", apiRoutes);

// http route for html home page
app.use("/", htmlRoutes);

// listen function to run server out of port
app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}`);
});
