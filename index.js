const express = require("express");
const app = express();
const router = require("./api");
const port = 8000;

app.use(express.json())

app.use(router);


app.listen(port,()=>{
  console.log("server is listening on port",port); 
})