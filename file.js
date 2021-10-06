const fs = require('fs');

fs.readFile('./mytext.txt', (err,data)=>{
    if(err){
        console.log(err);
    }
    console.log(data.toString());
})

fs.writeFile('./mytext.txt', 'my name is abc',()=>{
    console.log("file written");
})