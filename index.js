const express = require('express');
const mongoose = require('mongoose');
const port =8000;

mongoose.connect("mongodb://localhost:27017/nodeDemo");
let db = mongoose.connection;

db.once("open", () => {
    console.log("db connected successfully")
})

db.on('error', err => 
console.error(err));

const app = express();

const Employee = require("./models/Employees");

app.get("/insert", (req, res) => {
    let emp = new Employee({
        name: "abc",
        age: 32,
        team: "xyz",
        empId:125673876355772
    })

    emp.save((err, data) => {
        res.send("data inserted successfully");
    })
})


app.get("/update", (req, res) => {
    Employee.findOneAndUpdate({ name: "abc" }, { age: 30 }, (err, data) => {
        res.send(data);
    })
})

app.get("/find", (req, res) => {
  Employee.find({ name: req.query.name }, (err, data) => {
      res.send(data);
  })
})

/* app.get("/find", (req, res) => {
  Employee.find({ name:"abc" }, (err, data) => {
      res.send(data);
  })
}) */


app.get("/delete", (req, res) => {
    Employee.remove({ name: "abc" }, (err, data) => {
        res.send(data);
    })
})

app.listen(port, () => {
    console.log("listening on port",port)
})