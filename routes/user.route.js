const express = require('express')
const userRoute = express.Router()
const userController = require('../controllers/user.controller')
const passport = require('passport')

userRoute.post('/signup', passport.authenticate('signup', {session: false}), userController.signup)
userRoute.post('/login', userController.login)

module.exports = userRoute