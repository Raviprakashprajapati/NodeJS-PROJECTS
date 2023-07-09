require("dotenv").config();
const express = require("express")
const app = express()
const cors = require("cors")

// express middleware
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors())


const connectDb = require("./config/db.js")
// init connection to db----
connectDb()

const userRoutes = require("./routes/userRoutes.js")



// app.get("/",userRoutes)
app.use("/",userRoutes)







module.exports = app;