//DEPENDENCIES
const express = require("express") //To import Express from the npm package, we must require it by name
const cors = require("cors"); // 

//CONFIGURATIONS
const app = express(); // To create an epxress appication

// MIDDLEWARE
app.use(cors());
app.use(express.json()); // Creates 

//ROUTES
app.get("/", ( req, res ) => {
    res.send("Running on local host 1333");
})

const productsController = require("./controllers/productsController.js");
app.use("/products", productsController);

app.get("*", ( req, res) => {
    res.status(404).send("Page not found");
});

//EXPORTS
module.exports = app; //To allow us to import this file to another file