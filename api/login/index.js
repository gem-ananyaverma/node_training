const express = require("express");
const controller = require("./controller");
const Router = express.Router;


const router = new Router();


router.post("/loginPost",controller.loginPost);

module.exports = router;