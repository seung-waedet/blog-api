const express = require('express')
const blogRoute = express.Router()
const passport = require('passport')
const blogController = require('../controllers/blog.controller')

blogRoute.get("/", blogController.getAllArticles)

blogRoute.get("/article/:idOrTitle", blogController.getArticleByIdOrTitle)

blogRoute.get('/:state', passport.authenticate('jwt', {session: false}), blogController.filterByDraftsOrPublished)

blogRoute.post('/create-article', passport.authenticate('jwt', {session: false}), blogController.createArticle)

blogRoute.patch('/article/:id', passport.authenticate('jwt', {session: false}), blogController.updateArticle)

blogRoute.patch('/publish/:id', passport.authenticate('jwt', {session: false}), blogController.updateDraftToPublished)

blogRoute.delete('/article/:id', passport.authenticate('jwt', {session: false}), blogController.deleteArticle)

module.exports = blogRoute