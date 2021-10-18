const express = require("express");
const controller = require("./controller");
const Router = express.Router;


const router = new Router();


router.get("/getBlog",controller.getBlog);

module.exports = router;
