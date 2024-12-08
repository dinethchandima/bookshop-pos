const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mysql = require('mysql2');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root', 
  password: 'dineth@2005', 
  database: 'bookshop', 
});

db.connect((err) => {
  if (err) {
    console.error('Database connection failed:', err.stack);
    return;
  }
  console.log('Connected to MySQL database');
});

app.post('/api/register', (req, res) => {
  const { userId, name, username, email, phone, role, password } = req.body;

  const query = `
    INSERT INTO admin (admin_id, name, username, email, phone, role, password)
    VALUES (?, ?, ?, ?, ?, ?, ?)
  `;

  db.query(query, [userId, name, username, email, phone, role, password], (err) => {
    if (err) {
      console.error('Database error:', err);
      res.status(500).json({ success: false, message: 'Database error' });
      return;
    }
    res.status(200).json({ success: true, message: 'Registration successful' });
  });
});

app.post('/api/login', (req, res) => {
  const { username, password } = req.body;

  const query = 'SELECT * FROM admin WHERE username = ? AND password = ?';
  
  db.query(query, [username, password], (err, results) => {
    if (err) {
      console.error('Error executing query: ', err);
      return res.status(500).json({ success: false, message: 'Server error' });
    }

    if (results.length > 0) {
      return res.status(200).json({ success: true, message: 'Login successful' });
    } else {
      return res.status(401).json({ success: false, message: 'Invalid credentials' });
    }
  });
});
// API route to insert data into the 'item' table
app.post('/add-item', (req, res) => {
  const { item_id, item_name, category_id, price, barcode } = req.body;

  const query = `
    INSERT INTO item (item_id, item_name, category_id, price, barcode)
    VALUES (?, ?, ?, ?, ?)
  `;

  db.query(query, [item_id, item_name, category_id, price, barcode], (err, result) => {
    if (err) {
      console.error('Error inserting data:', err);
      res.status(500).send('Error inserting data');
    } else {
      res.status(200).send('Item added successfully');
    }
  });
});
// Endpoint to fetch all items
app.get('/items', (req, res) => {
  const query = 'SELECT item_id, item_name, category_id, price, barcode FROM item';
  db.query(query, (err, results) => {
    if (err) {
      console.error('Error fetching items:', err);
      res.status(500).send(err);
    } else {
      res.send(results);
    }
  });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${8080}`);
  console.log(`Server running on http://localhost:${8080}`);
  console.log(`Server running on http://localhost:${8080}`);
  console.log(`Server running on http://localhost:${8080}`);
 

});
