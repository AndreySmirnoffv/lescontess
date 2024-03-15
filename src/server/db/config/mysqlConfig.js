require('dotenv').config({path: "../../modules/.env"});
const mysql = require('mysql');
const express = require('express');
const app = express();

const pool = mysql.createPool({
    host: process.env.HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE
}).promise();

pool.query(`
    CREATE TABLE IF NOT EXISTS users (
        id INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        lastName VARCHAR(255) NOT NULL,
        country VARCHAR(255) NOT NULL,
        city VARCHAR(255) NOT NULL,
        region VARCHAR(255) NOT NULL,
        postalCode VARCHAR(255) NOT NULL,
        cardNumber VARCHAR(255) NOT NULL,
        phoneNumber VARCHAR(255) NOT NULL,
        email VARCHAR(255) NOT NULL
    );
`)
.then(() => console.log('Таблица создана успешно'))
.catch(err => console.error('Ошибка создания таблицы:', err));

app.use(express.json());

app.post('/checkout/', (req, res) => {
    const { name, lastName, country, city, region, postalCode, cardNumber, phoneNumber, email } = req.body;
  
    if (!name || !lastName|| !country || !city || !region || !postalCode ||!cardNumber || !phoneNumber || !email) {
      return res.status(400).json({ error: 'All fields are required' });
    }
  
    const newUser = { name, cardNumber, lastName, country, city, region, postalCode, phoneNumber, email };
  
    pool.query('INSERT INTO users SET ?', newUser, (error, results, fields) => {
      if (error) {
        console.error('Error inserting data:', error);
        res.status(500).json({ error: 'Error inserting data' });
        return;
      }
      console.log('Data inserted successfully:', results);
      res.json({ success: true });
    });
});

app.listen(3000, () => {
    console.log('Сервер запущен на порту 3000');
});
