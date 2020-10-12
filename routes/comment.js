const express = require('express')
const { asyncHandler } = require('../utils')
const router = express.Router()
const { Comment } = require('../models')
const { verifyToken } = require('../utils')
const jwt = require('jsonwebtoken')


//create a comment for a post
router.post('/create_comment', verifyToken, asyncHandler(async (req, res) => {
    let { comment, subredditId, postId } = req.body;
    jwt.verify(req.token, process.env.JWT_SECRET, async (err, authData) => {
        if(err){
            res.sendStatus(403)
        }else{
            await Comment.create({
                content: comment,
                userId: authData.user.id,
                postId: postId,
                subredditId: subredditId
            })
            let allComments = await Comment.findAll({
                where:{
                    postId: postId
                },
                order: [
                    ['id', 'DESC']
                ],
            })
            res.json({'comments': allComments})
        }
    })
}))

router.post('/delete_comment', verifyToken, asyncHandler(async (req, res) => {
    let { commentUserId, commentId } = req.body;
    jwt.verify(req.token, process.env.JWT_SECRET, async (err, authData) => {
        if(authData.user.id !== commentUserId){
            return res.send({'msg': 'user id does not match the user id on this comment'})
        }
        try{
            if(err){
                res.sendStatus(403)
            }else{
                await Comment.destroy({
                    where: {
                        id: commentId
                    }
                })

                res.status(200).json({'msg': 'success'})
            }
        }catch{
            res.status(400)
        }

    })
}))

module.exports = router;
