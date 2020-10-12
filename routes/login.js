const express = require('express')
const jwt = require('jsonwebtoken')
const { User } = require('../models')
const { asyncHandler, verifyLoginInfo} = require('../utils')
const bcrypt = require('bcryptjs')


const router = express.Router()


//User login
router.post('/', verifyLoginInfo, asyncHandler(async  (req, res) => {
    if(req.errors){
        return res.status(400).json({'errors': req.errors})
    }
    const { email, password } = req.body;


    const loginUser = await User.findOne({
        where: {
            email: email
        }
    })


    bcrypt.compare(password, loginUser.dataValues.password, (error, result) => {

        if(result){
            const user = {
                id: loginUser.dataValues.id,
                email: email,
                userName: loginUser.dataValues.userName,
            }


            //create jwt and send to user
            jwt.sign({user: user}, process.env.JWT_SECRET, (error, token) => {
                res.json({
                    token: token,
                    id: loginUser.id,
                    expiresIn: '7d'
                })
            })
        }else{
            res.status(400).send();
        }
    })

}))


module.exports = router;
