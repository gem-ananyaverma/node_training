const http = require('http');


http.createServer(function (req, res) {
    res.write('Hi there!!!!');
    res.end(); 
  }).listen(3001,()=>{
      console.log('server running');
  });

