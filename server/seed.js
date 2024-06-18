// this seed file has nothing really to do with our express server.
// it's a utility file to quickly add some data to our database.
// you can run this by doing 
// node seed.js
// remember to update your dotenv with your connection string!
import pg from "pg"
import dotenv from "dotenv"

dotenv.config()

console.log(process.env.DB_CONNECTION)

const db = new pg.Pool({
    connectionString: process.env.DB_CONNECTION
})

// serial - the database assigns a unique number to each row when it's inserted. 
// PRIMARY KEY - this is the unique number for each record in the table. 

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


// select everything from a table
`SELECT * FROM tablename`
// select everything from a table based on a condition 
`SELECT * FROM tablename WHERE condition = something`
// eg SELECT * FROM heroes WHERE superpower = 'Time Freezing'
`SELECT name FROM heroes`
// select certain columns based on a condition 
`SELECT name, superpower FROM heroes WHERE hero_id < 5`

// creating a new table 

// INNER JOIN - Fetching only those villains who have an arch enemy hero (and matching them up together)
`
SELECT
villains.name AS villain_name,
villains.evil_plan,
heroes.name AS hero_name,
heroes.superpower
FROM
villains
INNER JOIN
heroes
ON
villains.arch_enemy_id = heroes.hero_id
`

// LEFT JOIN
// Fetch ALL villains and their achr enemies (heroes) if they have one. 

`
SELECT
villains.name AS villain_name,
villains.evil_plan,
heroes.name AS hero_name,
heroes.superpower
FROM
villains
LEFT JOIN
heroes
ON
villains.arch_enemy_id = heroes.hero_id`

// Fetch ALL heroes and corresponding villains (if they have one)

`
SELECT
villains.name AS villain_name,
villains.evil_plan,
heroes.name AS hero_name,
heroes.superpower
FROM
villains
RIGHT JOIN
heroes
ON
villains.arch_enemy_id = heroes.hero_id`


// FULL JOIN
// FETCH ALL Villains And Heroes, including any without an arch enemy/hero counterpart
`
SELECT
villains.name AS villain_name,
villains.evil_plan,
heroes.name AS hero_name,
heroes.superpower
FROM
villains
FULL JOIN
heroes
ON
villains.arch_enemy_id = heroes.hero_id`