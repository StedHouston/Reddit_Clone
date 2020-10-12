const express = require('express')
const csurf = require('csurf')
const csrfProtection = csurf({ cookie: true })
const { asyncHandler } = require('../utils')
const router = express.Router()



const { User } = require('../models')




//fetch information for one user given user id
router.get('/:id', asyncHandler(async (req, res) => {

    const id = req.params.id;
    let user = await User.findOne({
        where: {
            id: id
        },
        attributes: ['firstName', 'lastName']
    })

    res.json(user)

}))


module.exports = router;
