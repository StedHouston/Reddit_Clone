const express = require('express')
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')
const csurf = require('csurf')
const csrfProtection = csurf({ cookie: true })
const cors = require('cors')
const subredditRouter = require('./routes/subreddit')
const loginRouter = require('./routes/login')
const signupRouter = require('./routes/signup')
const userRouter = require('./routes/user')
const { asyncHandler } = require('./utils')
const { User } = require('./models')
require('dotenv').config()


const app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.json())
app.use(cors())

//Routes
app.use('/subreddits', subredditRouter)
app.use('/login', loginRouter)
app.use('/signup', signupRouter)
app.use('/users', userRouter)


app.get('/', asyncHandler(async (req, res) => {
    let result = await User.findByPk(1);
    console.log(result)
    res.send('hello world')

}));



app.listen(8080, () => console.log('Listening on port: 8080'))
