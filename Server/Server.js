const express = require('express');
const session = require('express-session');
const cors = require('cors');

const app = express();
const port = 8000;

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:3000");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use(cors({credentials: true, origin: "http://localhost:3000"}));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


const mysql = require('mysql2');

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'Deadlines'
}).promise();


app.listen(port, ()=>{
    console.log("Server started successfully");
});

app.post("/newdeadline", async (req, res) => {
    console.log(req.body)
});

