import express, { Application, Request, Response } from "express";
import bodyParser from "body-parser";
const mysql = require('mysql');
const cors = require('cors'); // Import the cors package
const jwt = require("jsonwebtoken");

const app: Application = express();
app.use(cors()); // Enable CORS for all routes
const dotenv = require('dotenv');

const connection = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: '',
    database: 'diariesapp'
});

connection.connect(function(err: any) {
    if (err) throw err;
    console.log("Connected!");
});

// Middleware to parse JSON and urlencoded bodies
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/:userId", (req, res) => {
  const userId = req.params.userId; // Assuming you're passing userId as a query parameter
  console.log('2test id :'+userId)

  console.log('req.body.userId  ' +req.body.userId )
  console.log('req.body   ' +req.body )
  console.log('req.query.userId   ' +req.params.userId )
  const selectQuery = 'SELECT * FROM diary WHERE user_id = ?'; // Replace with your table name and column name
  connection.query(selectQuery, [userId], (err: any, rows: any) => {
    if (err) {
      console.error("Error executing query:", err);
      res.status(500).send("Internal Server Error");
      return;
    }

    console.log(rows);
    res.json(rows);
  });
});


app.post("/newDiary", (req, res) => {
    const { title, content, privacy } = req.body;

    if (!title || !content || privacy === undefined) {
        res.status(400).send("Missing or invalid diary entry data");
        return;
    }

    const insertQuery = 'INSERT INTO diary (title, content, privacy) VALUES (?, ?, ?)';
    const values = [title, content, privacy];

    connection.query(insertQuery, values, (err: any) => {
        if (err) {
            console.error("Error executing query:", err);
            res.status(500).send("Error inserting diary entry");
            return;
        }

        res.status(201).send("Diary entry inserted successfully");
    });
});
app.put("/editDiary/:id", (req, res) => {
  const id = req.params.id;
  const { title, content, privacy } = req.body;

  if (!title || !content || privacy === undefined) {
      res.status(400).send("Missing or invalid diary entry data");
      return;
  }

  const updateQuery = 'UPDATE diary SET title = ?, content = ?, privacy = ? WHERE id = ?';
  const values = [title, content, privacy, id];

  connection.query(updateQuery, values, (err: any) => {
      if (err) {
          console.error("Error executing query:", err);
          res.status(500).send("Error updating diary entry");
          return;
      }

      res.status(200).send("Diary entry updated successfully");
  });
});

// Delete a diary entry
app.delete("/deleteDiary/:id", (req, res) => {
  const id = req.params.id;

  const deleteQuery = 'DELETE FROM diary WHERE id = ?';

  connection.query(deleteQuery, [id], (err: any) => {
      if (err) {
          console.error("Error executing query:", err);
          res.status(500).send("Error deleting diary entry");
          return;
      }

      res.status(200).send("Diary entry deleted successfully");
  });
});


// Endpoint for user login
app.post('/login', (req, res) => {
  
  const { mail, password } = req.body;
  const selectQuery = 'SELECT * FROM users WHERE mail = ? AND password = ?';

  connection.query(selectQuery, [mail, password], (err: any,results: any) => {
    if (err) {
      console.error('Error executing query:', err);
      res.status(500).json({ error: 'Internal server error' });
      return;
    }

    if (results.length === 1) {
      const secretKey = '123';
      const token = jwt.sign({ userId: results[0].id }, secretKey)
      console.log(results[0] )
      const user = results[0] 
      console.log({ 
        message: 'Login successful',
        user ,
        token
      }
        );

      res.status(200).json({ 
        message: 'Login successful' ,
        user,
        token
      }
        );
    } else {
      res.status(401).json({ error: 'Invalid credentials' });
    }
  });
});


// const router = require('./routes/router.js');
// app.use('/api', router);




const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
    console.log(`Server is running on PORT ${PORT}`);
});
