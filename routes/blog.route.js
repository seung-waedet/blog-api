const express = require('express')
const blogRoute = express.Router()
const passport = require('passport')
const blogController = require('../controllers/blog.controller')

blogRoute.get("/", blogController.getAllArticles)

blogRoute.post('/create-article', passport.authenticate('jwt', {session: false}), blogController.createArticle)

module.exports = blogRoute