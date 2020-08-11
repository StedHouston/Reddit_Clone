const express = require('express')
const jwt = require('jsonwebtoken')
const { User } = require('../models')
const { asyncHandler } = require('../utils')
const bcrypt = require('bcryptjs')


const router = express.Router()


//User login
router.post('/', asyncHandler(async  (req, res) => {
    const { email, password } = req.body;

    const loginUser = await User.findOne({
        where: {
            email: email
        }
    })


    bcrypt.compare(password, loginUser.dataValues.password, (error, result) => {

        console.log(result)
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
                    expiresIn: '7d'
                })
            })
            console.log("success")
        }else{
            res.status(400).send();
        }
    })

}))


module.exports = router;
