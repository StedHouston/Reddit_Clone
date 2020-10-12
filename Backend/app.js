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
const commentRouter = require('./routes/comment')
const { asyncHandler } = require('./utils')
require('dotenv').config()


const app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.json())
app.use(cors())
app.use(express.static(path.join(__dirname, 'build')))


//Routes
app.use('/subreddits', subredditRouter)
app.use('/login', loginRouter)
app.use('/signup', signupRouter)
app.use('/users', userRouter)
app.use('/comments', commentRouter)

app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'))
})



app.listen(8080, () => console.log('Listening on port: 8080'))
