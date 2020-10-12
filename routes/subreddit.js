const express = require('express')
const csurf = require('csurf')
const csrfProtection = csurf({ cookie: true })
const { asyncHandler } = require('../utils')
const router = express.Router()
const { verifyToken } = require('../utils')
const jwt = require('jsonwebtoken')


const { User, Subreddit, Post, Comment } = require('../models')


router.get('/single/:title', asyncHandler(async (req, res) => {
    const title = req.params.title;
    const result = await Subreddit.findAll({
        where: {
            title
        }
    })

    res.json(result);
}))



//retrieve information for all subreddits   GET  /subreddits/
router.get('/', asyncHandler(async (req, res) => {

    const results = await Subreddit.findAll();
    res.json(results)
}))

//retrieves all posts for subreddit     GET     /subreddits/id/posts
router.get('/:id/posts', asyncHandler(async (req,res) => {
    const subredditId = parseInt(req.params.id, 10)

    const result = await Post.findAll({
        where: {
            subredditId
        },
        order: [
            ['updatedAt', 'DESC']
        ]
    })
    console.log(result)
    res.json(result)
}))

//retrieves a single post given post ID     GET     /subreddits/id/posts/id2
router.get('/:id/posts/:id2', asyncHandler(async (req, res) => {
    const postId = parseInt(req.params.id, 10)
    const result = await Post.findByPk(postId)
    res.json(result)
}))

//retrieves all comments for a post     GET     /subreddits/id/posts/id2/comments
router.get('/:id/posts/:id2/comments', asyncHandler(async (req, res) => {
    const postId = parseInt(req.params.id2, 10)
    const result = await Comment.findAll({
        where: {
            postId
        },
        order: [
            ['id', 'DESC']
        ],
    })
    res.json(result)
}))

//creates new subreddit     POST    /subreddits/create
router.post('/create', asyncHandler(async (req, res) => {
    const { title, description, pictureUrl } = req.body;
    //Get id from json webtoken.
    await Subreddit.create({
        title: 'Popeyes',
        description: 'Sell the best chicken around!',
        userId: 1,
        members: 0,
        bannerUrl: null,
        pictureUrl: null,
    })
    res.send("success")
}))

//creates new post on a subreddit       POST    /subreddits/1/create_post
router.post('/:id/create_post', verifyToken, asyncHandler(async (req, res) => {
    const { title, content } = req.body;
     let subredditId = req.params.id;
    console.log("inside")
    console.log(req.body)

    jwt.verify(req.token, process.env.JWT_SECRET, async (err, authData) => {
        if(err){
            res.sendStatus(403)
        }else{

            await Post.create({
                title: title,
                content: content,
                rating: 0,
                userId: authData.user.id,
                subredditId: subredditId
            })
            res.json("success")
        }
    })
}))

//retrieves information for a single subreddit and all posts
router.get('/:id', asyncHandler(async (req, res) => {
    const subredditId = parseInt(req.params.id);
    const result = await Subreddit.findAll({
        where: {
            id: subredditId,
        },
        include: [
            {
            model: Subreddit,
            model: Post,
            }
        ],
        order: [
            ['updatedAt', 'ASC']
        ]
    })
    console.log(result)
    res.json(result);
}))

module.exports = router;
