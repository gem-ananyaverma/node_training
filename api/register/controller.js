/* const registerData = function(req,res){
    console.log("registerData function called");

    res.send("");
} */

const data =[{
    email:"nxubbqx", 
    password:"1342"
}];

const RegisterDataPost = function(req,res){
    console.log("RegisterData post request")
    body=res.body;
    body=[{
        email:"nxubbqx",
        password:"1342"
    }]
    if(data.email===req.body.email){
        data.push(body)
        res.send("user already exists");

    }
    res.send("user registered")
}


module.exports = {
    RegisterDataPost:RegisterDataPost
}