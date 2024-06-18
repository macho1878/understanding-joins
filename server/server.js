import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import pg from 'pg'

const app = express()

app.use(express.json())
app.use(cors())
dotenv.config()

const db = new pg.Pool({
    connectionString: 'your connection string'
})

app.get('/', (req, res) => {
    res.json({message: `You're on the root route. How ruse`})
})

app.listen('8080', () => {
    console.log(`Server running on port 8080 (ノ ゜Д゜)ノ ︵ ┻━┻`)
})