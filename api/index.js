const express = require("express");
const Router = express.Router;
const loginRouter = require("./login");
const registerRouter = require("./register");
const postblogRouter = require("./postBlog")
const getblogRouter = require("./getBlog")
const router = new Router();

router.use("/login",loginRouter);
router.use("/register",registerRouter); 
router.use("/blog",postblogRouter);
router.use("/blog",getblogRouter);

module.exports = router;
