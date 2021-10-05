const express = require('express')
const os = require('os');
const {readFile, readFileSync} = require('fs')
const http = require('http');
const path = require('path');
const util = require('util');
const url = require('url');


const buf = Buffer.from('user');
console.log(buf);

console.log("Platform: " + os.platform());

/* const txt = readFileSync('./mytext.txt', 'utf-8')
console.log(txt) */
readFile('./mytext.txt', 'utf-8',(err,txt)=>{
    if(err){
        console.log("error",err)
    }
    else{
        console.log(txt)
    }
    
})

const my_add = 'http://localhost:3001/default.htm?month=sept&Project=node';
const qrr = url.parse(my_add, true);
console.log(qrr.search);
console.log(qrr.host);
console.log(qrr.pathname); 
const data = qrr.query;
console.log(data)

const txt = 'hi %s i am %s my age is %d';
const res = util.format(txt, 'xyz','abc',21 );
console.log(res);

http.createServer(function (req, res) {
    res.write('hi there!');
    res.end(); 
  }).listen(3001)

var filename = path.dirname('./mytext.txt');
  console.log(filename);