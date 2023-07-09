// server/index 
// app.js
// models  = database schema
// controller = it basicall a ()=>{}  data send and receive logic
// routes = /

// controoler give data to routes file first
// then routes connect to app.js

const app = require("./app.js")

const PORT = process.env.POST || 5000;


app.listen(PORT,()=>{
    console.log(`Server running at ${PORT}.....`)
})





