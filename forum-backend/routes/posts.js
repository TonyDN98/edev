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

// Adaugă un comentariu la o postare
router.post('/:id/comments', auth, [
    check('content', 'Conținutul comentariului este necesar').not().isEmpty()
], async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    try {
        // Găsim postarea după ID
        const post = await Post.findById(req.params.id);
        if (!post) {
            return res.status(404).json({ msg: "Postare nu a fost găsită" });
        }

        // Creăm noul comentariu
        const newComment = {
            author: req.user.id,
            content: req.body.content
        };

        // Adăugăm comentariul la postare
        post.comments.push(newComment);
        await post.save();

        res.json(post);
    } catch (err) {
        res.status(500).send("Eroare de server, comentariul nu a fost adaugat.");
    }
});


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

// Actualizează o postare (doar autorul poate face asta)
router.put('/:id', auth, async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);

        if (!post) {
            return res.status(404).json({ msg: "Postare nu a fost găsită" });
        }

        // Verificăm dacă utilizatorul este autorul postării
        if (post.author.toString() !== req.user.id) {
            return res.status(403).json({ msg: "Nu aveți permisiunea să editați această postare" });
        }

        // Actualizăm titlul și conținutul postării
        post.title = req.body.title || post.title;
        post.content = req.body.content || post.content;

        await post.save();
        res.json(post);
    } catch (err) {
        res.status(500).send("Eroare de server");
    }
});

// Șterge o postare (doar autorul poate face asta)
router.delete('/:id', auth, async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);

        if (!post) {
            return res.status(404).json({ msg: "Postare nu a fost găsită" });
        }

        // Verificăm dacă utilizatorul este autorul postării
        if (post.author.toString() !== req.user.id) {
            return res.status(403).json({ msg: "Nu aveți permisiunea să ștergeți această postare" });
        }

        await post.remove();
        res.json({ msg: "Postare ștearsă cu succes" });
    } catch (err) {
        res.status(500).send("Eroare de server");
    }
});



module.exports = router;
