const express = require("express")
const router = express.Router();


// excess use controller routes-
const {home,createUser,getUser,deleteUser,editUser} =require("../controllers/userController.js")




router.get("/",home)
router.post('/createuser',createUser)
router.get("/getusers",getUser)
router.delete("/deleteuser/:id",deleteUser)
router.put("/edituser/id",editUser)

module.exports = router