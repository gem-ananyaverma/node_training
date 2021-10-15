const express = require("express");
const Router = express.Router;
/* const loginRouter = require("./login"); */
const registerRouter = require("./register");
const router = new Router();

/* router.use("/login",loginRouter); */
router.use("/register",registerRouter); 

module.exports = router;
