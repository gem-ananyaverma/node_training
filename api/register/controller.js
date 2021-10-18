/* const registerData = function(req,res){
    console.log("registerData function called");

    res.send("");
} */
const data =[{
    email:"nxubxhbu",
    password:"1342"
}, {
    email:"abc",
    password:"1276"
},{
    email:"xyz",
    password:"1222"
}];



const RegisterDataPost = function(req,res){
    
    console.log("RegisterData post request")
    body=req.body;
    const emailExists = data.some(user => user.email === body.email);
    if(!emailExists) {
        data.push(body)
        console.log(data);
        res.send("user registered successfully")
        
    }
    res.send("user already exists")
}


module.exports = {
    RegisterDataPost:RegisterDataPost
}
