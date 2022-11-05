const mongoose = require('mongoose')
const { Schema } = mongoose

const articleSchema = new Schema({
    title: {
        type: String,
        required: true,
        unique: true
    },
    author: {
        type: String
    },
    formattedTitle: {
        type: String,
        unique: true
    },
    description: {
        type: String
    },
    tags: [String],
    timestamp: {
        type: Date
    },
    state: {
        type: String,
        enum: ["draft", "published"],
        default: "draft"
    },
    read_count: {
        type: Number,
        default: 0
    },
    reading_time: {
        type: String
    },
    body: {
        type: String,
        required: true
    },
    created_at: {
        type: Date,
        default: Date
    },
    updated_at: {
        type: Date,
        default: Date
    },
    authorId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }
})

articleSchema.set('toJSON', {
    transform: (document, returnedObject) => {
        delete returnedObject.__v
    }
})


module.exports = mongoose.model('Article', articleSchema)