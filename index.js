//const express = require('express')
const os = require('os');
const {readFile, readFileSync} = require('fs')
const http = require('http');
const path = require('path');
const util = require('util');
const url = require('url');


const buf = Buffer.from('user');
console.log("buffer: ",buf);


console.log("Home Directory: " + os.homedir());
console.log("Platform: " + os.platform());

/* const txt = readFileSync('./mytext.txt', 'utf-8')
console.log(txt) */

readFile('./mytext.txt', 'utf-8',(err,txt)=>{
    if(err){
        console.log("error",err)
    }
    else{
        console.log("text in mytext.txt: ",txt)
    }
    
})

const my_add = 'http://localhost:3001/default.htm?month=sept&Project=node';
const qrr = url.parse(my_add, true);
console.log("search: ",qrr.search);
console.log("hostname: ", qrr.host);
console.log("pathname:", qrr.pathname); 
const data = qrr.query;
console.log("data: ", data)

const txt = 'hi %s i am %s my age is %d';
const res = util.format(txt, 'xyz','abc',21 );
console.log("response of util: ",res);

http.createServer(function (req, res) {
    res.write('hi there!');
    res.end(); 
  }).listen(3001)

var filename = path.dirname('./mytext.txt');
  console.log("filename: ",filename);