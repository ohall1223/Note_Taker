// dependencies 
const express = require("express");
// const fs = require("fs");
// const path = require("path");
// const db = require("./db/db.json");
// const { request } = require("http");
const htmlRoutes = require("../routes/htmlRoutes")
const apiRoutes = require("../routes/apiRoutes")

// express app
const app = express();
const PORT = 3001;

let notes = []

// link assets
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

// middleware 
app.use("/api", apiRoutes)
app.use("/", htmlRoutes)



app.listen(PORT, () => {
    console.log(`Example app listening at http://localhost:${PORT}`)
});


