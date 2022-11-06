const articleModel = require('../models/articleModel')
const userModel = require('../models/userModel')

async function getAllArticles(req, res, next) {
    try {
        const articles = await articleModel.find({})
        return res.status(200).json(articles)
    } catch(err) {
        next(err)
    }
}

async function createArticle(req, res, next) {
    const alphabets = "abcdefghijklmnopqrstuvwxyz0123456789"
    const { title } = req.body
    const lowerCaseTitle = title.toLowerCase()
    let formattedTitle = ""
    
    //Formats title to be stored in db. This will be used to get a single article
    for (let i = 0; i < lowerCaseTitle.length; i++) {
        
        if (alphabets.includes(lowerCaseTitle[i])) formattedTitle += lowerCaseTitle[i]
        
        if (lowerCaseTitle[i] == " " && formattedTitle.slice(-1) != "-") formattedTitle += "-"
    }
    if (formattedTitle.slice(-1) == "-") formattedTitle = formattedTitle.slice(0, -1)

    try {
        const user = await userModel.findById(req.user._id);
        const article = await articleModel.create({
            ...req.body,
            author: `${user.last_name} ${user.first_name}`,
            formattedTitle: formattedTitle,
            authorId: req.user._id
        })
        
        const response = {article: {...article._doc}, status: true, message: "Article creation successful"}
        return res.status(201).json(response)
    } catch(err) {
        next(err)
    }
    
}

async function updateArticle(req, res, next) {
    const id = req.params.id
    const authorId = req.user._id
    const infoToUpdate = req.body

    try {
        const update = await articleModel.findByIdAndUpdate(id, {...infoToUpdate, authorId}, {new: true})
        const response = {article: {...update._doc}, status: true, message: "Update successful"}
        return res.status(200).json(response)
    } catch(err) {
        next(err)
    }   
}

async function filterByDraftsOrPublished(req, res, next) {
    const authorId = req.user._id;
    let state = req.params.state

    if (state == "drafts") state = "draft"

    try {
        const filter = await articleModel.find({authorId, state: state})

        const response = {articles: filter, status: true}
        return res.status(200).json(response)
    } catch(err) {
        next(err)
    }
}


async function updateDraftToPublished(req, res, next) {
    const authorId = req.user._id
    const id = req.params.id
    try {
        const update = await articleModel.findByIdAndUpdate(id, {authorId, state: "published"}, {new: true})
        const response = {article: {...update._doc}, status: true, message: "Update successful - your article is now live"}
        return res.status(200).json(response)
    } catch(err) {
        next(err)
    }
}

module.exports = {
    getAllArticles,
    createArticle,
    updateArticle,
    filterByDraftsOrPublished,
    updateDraftToPublished
}