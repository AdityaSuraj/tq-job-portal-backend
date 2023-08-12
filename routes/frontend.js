const FrontendRouter = require('express').Router();
const frontendController = require('../controllers/FrontendController');
const authenticate = require('../middlewares/AuthMiddleware');
const FrontendController = new frontendController();

const authController = require("../controllers/AuthController");
const AuthController = new authController();


FrontendRouter.post('/login', AuthController.login);
FrontendRouter.post('/register', AuthController.createAccount);

FrontendRouter.get('/home-screen', FrontendController.homeScreen);
FrontendRouter.post('/job-list', FrontendController.jobs);
FrontendRouter.post('/new-job', FrontendController.newJob);

module.exports = FrontendRouter;