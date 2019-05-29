const express = require('express');
const router = express.Router();

// Article Model
const Article = require('../../models/Article');

// @route  GET api/articles
// @desc   GET All Articles
// @access Public 
router.get('/', (request, response) => {
    Article.find()
        .sort({ date:-1 })
        .then(articles => response.json(articles))
})
// Don't need to type in api/articles


// @route  POST api/articles
// @desc   Create An article
// @access Public 
router.post('/', (request, response) => {
    const newArticle = new Article({
        Title: request.body.Title
    });

    newArticle.save().then(article => response.json(article));
})
// Don't need to type in api/articles

// @route  DELETE api/articles/:id
// @desc   Delete An article
// @access Public 
router.delete('/:id', (request, response) => {
    Article.findById(request.params.id)
        .then(article => article.remove().then(() => response.json({ article: article, success: true })))
        .catch(err => response.status(404).json({ success: false }));
})
// Don't need to type in api/articles


module.exports = router;
// ES6 module exports method