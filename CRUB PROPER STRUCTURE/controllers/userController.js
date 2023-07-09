const user = require("../models/userModel.js")


exports.home = (req, res) => {
    res.send("Helllo world")
}

exports.createUser = async (req, res) => {
    // post data in database
    try {


        const { name, email } = req.body

        if (!name || !email) {
            throw new Error("Name and Email are required")
        }
        
        // const userExist =  user.findOne({email})
        // if (userExist) {
        //     throw new Error("User only exists with this email")
        // }

        const userData = await user.create({
            name:name,
            email:email
        })

        res.status(201).json({
            success: true,
            message: "User created succesfully",
            userData
        })



    } catch (error) {

        console.log(error)
        res.status(400).json({
            success: false,
            message: error.message

        })




    }
}

exports.getUser = async(req,res)=>{

    try {
         const allUser =  await user.find({})
        //  if (!allUser) {
            
        //  }
            res.status(200).json({
            success:true,
            allUser        
            })

    } catch (error) {
        console.log(error)
        res.status(400).json({
            success:false,
            message:error.message
        })
    }

}

exports.deleteUser = async(req,res)=>{
    try {
        // params id data
        const userId =  req.params.id
        const result= await user.findByIdAndDelete(userId)
        res.status(200).json({
            success:true,
            message:"User deleted succesfully"
        })

    } catch (error) {
        console.log(error)
        res.status(400).json({
            success:false,
            message:error.message
        })
    }
}

exports.editUser = async(req,res)=>{
    try {
        const edit = await user.findByIdAndUpdate(req.params.id,req.body)
        res.status(200).json({
            success:true,
            message:"User Updated successfully",

        })
        
    } catch (error) {
        console.log(error)
        res.status(400).json({
            success:false,
            message:error.message
        })
    }
}