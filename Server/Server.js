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

const dotenv = require('dotenv');
dotenv.config();

const {Client} = require('pg');
const client = new Client({
    host: 'localhost',
    user: 'postgres',
    port: 5432,
    password: process.env.PASSWORD,
    database: 'deadline-countdown-db'
});

client.connect();

client.query(`Select * from account`, (err, res) => {
    if(!err){
        console.log(res.rows);
    }
    else{
        console.log(err.message)
    }
    client.end;
})


/*
const mysql = require('mysql2');

const pool = mysql.createPool({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: '123',
    database: 'UsersDatabase'
}).promise();

const result = pool.query('SELECT * FROM Users');
console.log(result);
*/

/*
var myConnection = mysql.createConnection({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: 'user_db'
});

myConnection.connect(function(err) {
    myConnection.query(sql, function(err, result){})
})

myConnection.connect(function(err) {

    console.log("conneted to db")
    myConnection.query("CREATE DATABASE user_db", function (err, result) {
        console.log("created")
    })
});
*/


app.listen(port, ()=>{
    console.log("Server started successfully");
});

app.post("/newdeadline", async (req, res) => {
    console.log(req.body)
});

