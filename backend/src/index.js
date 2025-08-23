import express from 'express'
import dotenv from 'dotenv'
import authRoutes from './routes/auth.route.js'
import cookieParser from 'cookie-parser'
import { connectDB } from './lib/db.js'

dotenv.config() // to use env file
const app = express()

app.use(express.json()) // extract json data from body
app.use(cookieParser())

app.use('/api/auth', authRoutes)

const port = process.env.PORT

app.listen(port, (req, res) => {
  console.log(`Server is running on port ${port}`)
  connectDB()
})
