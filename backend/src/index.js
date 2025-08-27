import express from 'express'
import dotenv from 'dotenv'
import authRoutes from './routes/auth.route.js'
import messageRoutes from './routes/message.route.js'
import cookieParser from 'cookie-parser'
import cors from 'cors'
import { connectDB } from './lib/db.js'
import {io, server, app} from "./lib/socket.js"

dotenv.config() // to use env file

app.use(express.json({ limit: '10mb' })) // or higher if needed
app.use(cookieParser())

app.use(
  cors({
    origin: 'http://localhost:5173', // your frontend URL
    credentials: true, // if using cookies/auth
  })
)

app.use('/api/auth', authRoutes)

app.use('/api/messages', messageRoutes)

const port = process.env.PORT

server.listen(port, (req, res) => {
  console.log(`Server is running on port ${port}`)
  connectDB()
})
