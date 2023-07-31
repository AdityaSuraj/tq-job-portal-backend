const DashboardRouter = require('./dashboard');
const FrontendRouter = require('./frontend');

const Router = require('express').Router();

Router.use("/",FrontendRouter);
Router.use('/dashboard',DashboardRouter);

module.exports = Router;