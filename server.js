const express = require("express")
const colors = require("colors")
const morgan = require("morgan")

//initialization on express
const app = express();

//middleware
app.use(morgan("dev"))


//Defining routes..
//GET ROUTE....
app.get("/", (req, res) => {
    res.send("hello there. Welcome to my world ")
})

//Port listening..
app.listen(3000, () => {
    console.log("Server running....".inverse.green.bold)
})