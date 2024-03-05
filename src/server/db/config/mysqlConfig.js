require('dotenv').config({path: "../../modules/.env"})
const mysql = require('mysql')
const express = require('express')
const app = express()

const pool = mysql.createPool({
    host: process.env.HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE
}).promise()


app.use(express.json());

app.post('/api/data', (req, res) => {
    const { name, lastName, country, city, region, postalCode, cardNumber, phoneNumber, email } = req.body;
  
    if (!name || !lastName|| !country || !city || !region || !postalCode ||!cardNumber || !phoneNumber || !email) {
      return res.status(400).json({ error: 'All fields are required' });
    }
  
    const newUser = { name, cardNumber, lastName, country, city, region, postalCode, phoneNumber, email };
  
    connection.query('INSERT INTO users SET ?', newUser, (error, results, fields) => {
      if (error) {
        console.error('Error inserting data:', error);
        res.status(500).json({ error: 'Error inserting data' });
        return;
      }
      console.log('Data inserted successfully:', results);
      res.json({ success: true });
    });
  });
  