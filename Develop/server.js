// dependencies 
const express = require("express");
const htmlRoutes = require("../Develop/routes/htmlRoutes");
const apiRoutes = require("../Develop/routes/apiRoutes");

// express app
const app = express();
const PORT = process.env.PORT || 3001;

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


