
/* const blogData = [{
    email:"abc",
    blogTitle:"bhb",
    blogBody:"bhjh jn"
}] */

//const blogData = require('')

const data =[{
    email:"nxubxhbu",
    
}, {
    email:"abc",
   
},{
    email:"xyz",
    
}];

const blogData=[{
    //email:'abc',
    blogTitle:"blog1",
    blogBody:"blogBody"
}]




const getBlog = function(req,res){
    body = req.body
    console.log("blog get request")
    //const response = await {functionName}
    /* console.log(JSON.parse(response))
    res.send(body) */
    const emailExists = data.some(user => user.email === body.email);
    if(emailExists){
        res.send(blogData)
    }
    res.send("user invalid")
}


module.exports = {
    getBlog:getBlog
} 