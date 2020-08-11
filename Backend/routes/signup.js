const express = require('express')
const jwt = require('jsonwebtoken')
const JwtConfig  = require('../config/index')
const { asyncHandler } = require('../utils')
const bcrypt = require('bcryptjs')
const router = express.Router()
const { User } = require('../models')



router.post('/', asyncHandler(async (req, res) => {

    const { firstName, lastName, email, password, userName } = req.body;

    //check to see if username is already taken

    const name = await User.findAll({
        where: {
            userName: userName
        }
    })

    if(name.length){
        res.send("Username already taken")
    }


    const checkEmail = await User.findAll({
        where: {
            email: email
        }
    })


    if(checkEmail.length){
        res.json({"message": "Email is already registered"})
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
            console.log(tempUser.dataValues.id)
            let tokenUser = {
                userName: userName,
                id: tempUser.dataValues.id,
            }



            jwt.sign({user: tokenUser}, process.env.JWT_SECRET, (error, token) => {
                res.json({
                    token: token,
                    expiresIn: '7d'
                })
            })
        })
    })




}))


module.exports = router;
