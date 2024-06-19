import express from "express"
import pg from "pg"
import dotenv from "dotenv"
import cors from "cors"

const app = express()

// so our server can read incoming JSON (as an object)
app.use(express.json())
app.use(cors())
dotenv.config()

const db = new pg.Pool({
    connectionString: process.env.DB_CONNECTION
})


app.get('/villains', async (req, res) => {
    // I need to speak to my database and find out all the villains
    try {
        const result = await db.query(`SELECT * FROM villains`)
        res.json(result)
    } catch (err) {
        res.json(err)
    }
})

// root
// route
app.get('/', (request, response) => {
    response.send(`You've reached the route route - please leave a message`)
})

app.listen('8080', () => {
    console.log('Server running ... ON PORT 8080 ლ(`◉◞౪◟◉‵ლ)')
})