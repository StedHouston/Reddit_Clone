const express = require('express')
const jwt = require('jsonwebtoken')
const JwtConfig  = require('../config/index')
const { asyncHandler, verifySignupInfo } = require('../utils')
const bcrypt = require('bcryptjs')
const router = express.Router()
const { User } = require('../models')



router.post('/', verifySignupInfo, asyncHandler(async (req, res) => {
    if(req.errors.length > 0){
       return res.status(400).json({'errors': req.errors})
    }
    const { firstName, lastName, email, password, userName } = req.body;

    //check to see if username is already taken
    const name = await User.findAll({
        where: {
            userName: userName
        }
    })
    if(name.length){
        return res.status(400).json({'errors': ['Username already taken']})
    }

    //check if account already exits with email
    const checkEmail = await User.findAll({
        where: {
            email: email
        }
    })
    if(checkEmail.length){
        return res.status(400).json({'errors': ['Email is already registered']})
    }



    bcrypt.genSalt(10, function(error, salt){
        bcrypt.hash(password, salt, async (error, hash) => {
            newUser = {
                firstName: firstName,
                lastName: lastName,
                'password': hash,
                userName: userName,
                email: email,
            }



            await User.create(newUser)

            let tempUser = await User.findOne({
                where: {
                    email: email
                }
            })
            console.log("----------   " + tempUser)
            console.log(tempUser)
            let tokenUser = {
                userName: userName,
                id: tempUser.dataValues.id,
            }



            jwt.sign({user: tokenUser}, process.env.JWT_SECRET, (error, token) => {
                res.json({
                    token: token,
                    id: tokenUser.id,
                    expiresIn: '7d'
                })
            })
        })
    })




}))


module.exports = router;
