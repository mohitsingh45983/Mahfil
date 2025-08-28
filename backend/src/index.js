import express from 'express'
import dotenv from 'dotenv'
import authRoutes from './routes/auth.route.js'
import messageRoutes from './routes/message.route.js'
import cookieParser from 'cookie-parser'
import cors from 'cors'
import { connectDB } from './lib/db.js'
import { io, server, app } from './lib/socket.js'
import path from 'path'

dotenv.config() // to use env file

const port = process.env.PORT || 5001
const __dirname = path.resolve()

app.use(express.json({ limit: '10mb' })) // or higher if needed
app.use(cookieParser())

app.use(
  cors({
    origin: process.env.CLIENT_URL || 'http://localhost:5173',
    credentials: true,
  })
)

app.use('/api/auth', authRoutes)

app.use('/api/messages', messageRoutes)

if (process.env.NODE_ENV === 'production') {
  // __dirname points to backend/src, so go up two levels to repo root
  const distPath = path.join(__dirname, '../../frontend/dist')
  app.use(express.static(distPath))

  app.get('*', (req, res) => {
    res.sendFile(path.join(distPath, 'index.html'))
  })
}

server.listen(port, (req, res) => {
  console.log(`Server is running on port ${port}`)
  connectDB()
})
