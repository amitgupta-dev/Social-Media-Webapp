const express = require('express')
const bodyparser = require('body-parser')
const cors = require('cors')
const cookieParser = require('cookie-parser')
const morgan = require('morgan')
const dotenv = require('dotenv')

dotenv.config()
const app = express()

// default middlewares
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(bodyparser.json())
app.use(bodyparser.urlencoded({ extended: false }))
app.use(cors({ credentials: true, origin: ['http://localhost:5173'] }))
app.use(cookieParser())
app.use(morgan('dev'))

// custom middlewares
const { verifyUser } = require('./middlewares/verifyUser')

const connect = require('./connection/connect')

// route imports
const authRoutes = require('./routes/authRoutes')
const userRoutes = require('./routes/userRoutes')
const commentRoutes = require('./routes/commentRoutes')
const postRoutes = require('./routes/postRoutes')
const likeRoutes = require('./routes/likeRoutes')
const requestRoutes = require('./routes/requestRoutes')

// routes
app.get('/', (req, res) => { res.send("Welcome to the treddy backend") })
app.use('/auth', authRoutes)
app.use('/user', verifyUser, userRoutes)
app.use('/comment', verifyUser, commentRoutes)
app.use('/post', verifyUser, postRoutes)
app.use('/like', verifyUser, likeRoutes)
app.use('/request', verifyUser, requestRoutes)

connect(process.env.MONGO_URL, '5000', app)