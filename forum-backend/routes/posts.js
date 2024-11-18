// routes/posts.js
const express = require('express');
const { check, validationResult } = require('express-validator');
const Post = require('../models/Post');
const auth = require('../middleware/auth');
const router = express.Router();

// Creare postare nouă
router.post(
    '/',
    auth,  // Middleware pentru autentificare
    [
        check('title', 'Titlul este necesar').not().isEmpty(),
        check('content', 'Conținutul este necesar').not().isEmpty()
    ],
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        try {
            const { title, content } = req.body;
            const newPost = new Post({
                title,
                content,
                author: req.user.id
            });

            const post = await newPost.save();
            res.json(post);
        } catch (err) {
            res.status(500).send("Eroare de server");
        }
    }
);

// Obține toate postările
router.get('/', async (req, res) => {
    try {
        const posts = await Post.find().populate('author', 'username');
        res.json(posts);
    } catch (err) {
        res.status(500).send("Eroare de server");
    }
});

// Obține o postare specifică
router.get('/:id', async (req, res) => {
    try {
        const post = await Post.findById(req.params.id).populate('author', 'username');
        if (!post) {
            return res.status(404).json({ msg: "Postare nu a fost găsită" });
        }
        res.json(post);
    } catch (err) {
        res.status(500).send("Eroare de server");
    }
});

module.exports = router;
