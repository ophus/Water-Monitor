const express = require('express');
const mysql = require('mysql');
const cors = require('cors');

const app = express();
app.use(cors());

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'water monitor'
});

app.get('/', (req, res) => {
    return res.json("from backend with love");
});

app.get('/logindetails', (req, res) => {
    const sql = "SELECT * FROM login";
    db.query(sql, (err, result) => {
        if (err) return res.json(err);
        return res.json(result);
    });
});

app.listen(8080, () => {
    console.log("server is running on port 8080");
});
