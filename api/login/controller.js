
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


const loginPost = function(req,res){
    console.log("login post request")
    body=req.body;
    var login=false;
    const emailExists = data.some(user => user.email === body.email);
    if(emailExists){
        login=true;
        res.send("user authorised") 
        console.log(login)  
    }
    res.send("user invalid")
}


module.exports = {
    loginPost:loginPost
}