// models/Post.js
const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    title: { type: String, required: true },
    content: { type: String, required: true },
    author: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    date: { type: Date, default: Date.now },
    comments: [
        {
            author: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
            content: { type: String, required: true },
            date: { type: Date, default: Date.now }
        }
    ],
    likes: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }], // Array de utilizatori care au dat like
    dislikes: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }] // Array de utilizatori care au dat dislike
});

module.exports = mongoose.model('Post', postSchema);
