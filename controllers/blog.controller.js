const articleModel = require('../models/articleModel')
const userModel = require('../models/userModel')

async function getAllArticles(req, res, next) {

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

module.exports = {
    getAllArticles,
    createArticle
}