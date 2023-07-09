const mongoose = require("mongoose")

const connectDb = async()=>{

    mongoose.connect(process.env.MONGO_URL)
    .then((conn)=>{
        console.log("COnnected to DB",conn.connection.host)
    })
    .catch((error)=>{{
         console.log("ERROR HAI",error)
            process.exit(1)
    }})

}



module.exports = connectDb