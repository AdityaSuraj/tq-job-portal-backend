const FrontendRouter = require('./frontend');

const Router = require('express').Router();

Router.use("/",FrontendRouter);

module.exports = Router;