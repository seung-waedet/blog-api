const express = require('express')
const blogRoute = express.Router()
const passport = require('passport')
const blogController = require('../controllers/blog.controller')

blogRoute.get("/", blogController.getAllArticles)

blogRoute.post('/create-article', passport.authenticate('jwt', {session: false}), blogController.createArticle)

blogRoute.patch('/draft/:id', passport.authenticate('jwt', {session: false}), blogController.updateArticle)

module.exports = blogRoute