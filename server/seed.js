// this seed file has nothing really to do with our express server.
// it's a utility file to quickly add some data to our database.
// you can run this by doing 
// node seed.js
// remember to update your dotenv with your connection string!
import pg from "pg"
import dotenv from "dotenv"

dotenv.config()

const db = new pg.Pool({
    connectionString: process.env.DB_CONNECTION
})

db.query(`CREATE TABLE IF NOT EXISTS heroes (
    hero_id SERIAL PRIMARY KEY,
    name VARCHAR(50),
    superpower VARCHAR(255)
)`)

db.query(`INSERT INTO heroes (name, superpower) VALUES
('Captain Giggles', 'Giggle Inducement'),
('Bubble Blaster', 'Bubble Generation'),
('Chrono Keeper', 'Time Freezing'),
('Candy Crusader', 'Candy Creation'),
('Weather Witch', 'Weather Control'),
('Echo', 'Voice Mimicry'),
('Armsmaster', 'Trying hard'),
('Mind Master', 'Mind Reading'),
('Shapeshifter', 'Shape Shifting');
`)