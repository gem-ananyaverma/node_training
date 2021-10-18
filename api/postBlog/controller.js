
const data =[{
    email:"nxubxhbu",
}, {
    email:"abc",
},{
    email:"xyz",
}];

const blogData = [{
}]

const postBlog = function(req,res){
    console.log("blog post request")
    body=req.body;
    var login=false;
    const emailExists = data.some(user => user.email === body.email);
    if(emailExists){
        login=true
        if(req.body.blogBody){
            blogData.push(body)
            res.send("blog posted")
        }
        console.log("error in posting blog")
        res.send("user invalid")
    }
    res.send("user invalid")
    
}


module.exports = {
    postBlog:postBlog
}