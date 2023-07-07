const express = require('express');
const {signup,logIn} = require('../controller/controller');

const authRouter = express.Router();

authRouter.post('/addUser', signup)
authRouter.post('/login', logIn)

module.exports = authRouter