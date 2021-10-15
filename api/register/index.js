const express = require("express");
const Router = express.Router;
const registerUser=[{
        "name":"cnhuwc",
        "email":"nxubbqx", 
        "password":"1342"
}]


const router = new Router();

router.post('/register',(req,res)=>{
    const {name,email, password} = req.body;
    let errors = [];
    /* console.log(' Name ' + name+ ' email :' + email+ ' pass:' + password); */
    if(regsiterUser.email != body.email ) {
        errors.push({msg : "user already exists"})
    }
})

/* router.post("/register",(req,res)=>{
    body = res.body;
    {
        email,
        password
    }
    registerUser.push(body);
    if(registerUser.email!=body.email){
        console.log("user data")
    }
    console.log("no data")
    res.status(404).send("user exists")
}); */

/* router.post("/data",controller.userDataPost); */

module.exports = router;