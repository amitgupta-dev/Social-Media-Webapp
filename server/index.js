const express = require('express')
const bodyparser = require('body-parser')
const cors = require('cors')
const cookieParser = require('cookie-parser')
const morgan = require('morgan')
const dotenv = require('dotenv')

dotenv.config()
const app = express()

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(bodyparser.json())
app.use(bodyparser.urlencoded({ extended: false }))
app.use(cors({ credentials: true, origin: ['http://localhost:5173'] }))
app.use(cookieParser())
app.use(morgan('dev'))

const connect = require('./connection/connect')
const authRoutes = require('./routes/authRoutes')

app.use('/', authRoutes)

connect(process.env.MONGO_URL, '5000', app)