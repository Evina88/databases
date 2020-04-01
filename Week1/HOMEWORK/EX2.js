const express = require('express');
const mysql = require('mysql');

// Create connection
const db = mysql.createConnection({
    host: 'localhost',
    user: 'hyfuser',
    password: 'hyfpassword',
    database: 'new_world'
});

// Connect
db.connect((err) => {
    if (err) {
        console.log(err);
    }
    console.log('MySql Connected...');
});

const app = express();
app.listen('3100', () => {
    console.log("server started at port 3100");
});

//1.What are the names of countries with population greater than 8 million?
app.get('/query/1', (req, res) => {
    let sql = 'SELECT Name FROM country where Population > 8000000';
    let query = db.query(sql, (err, results) => {
        if (err) throw err;
        console.log(results);
        res.send(results);
    });
});

// What are the names of countries that have “land” in their names ?
app.get('/query/2', (req, res) => {
    let sql = 'SELECT Name FROM country WHERE Name LIKE "%land%"';
    let query = db.query(sql, (err, results) => {
        if (err) throw err;
        console.log(results);
        res.send(results);
    });
});
//     What are the names of the cities with population in between 500, 000 and 1 million ?
app.get('/query/3', (req, res) => {
    let sql = 'SELECT Name FROM country WHERE population BETWEEN 500000 AND 1000000';
    let query = db.query(sql, (err, results) => {
        if (err) throw err;
        console.log(results);
        res.send(results);
    });
});
//         What's the name of all the countries on the continent ‘Europe’?
app.get('/query/4', (req, res) => {
    let sql = "SELECT Name FROM country WHERE Continent = 'Europe'";
    let query = db.query(sql, (err, results) => {
        if (err) throw err;
        console.log(results);
        res.send(results);
    });
});
// List all the countries in the descending order of their surface areas.
app.get('/query/5', (req, res) => {
    let sql = "SELECT Name, SurfaceArea FROM country ORDER BY SurfaceArea DESC";
    let query = db.query(sql, (err, results) => {
        if (err) throw err;
        console.log(results);
        res.send(results);
    });
});
// What are the names of all the cities in the Netherlands ?
app.get('/query/6', (req, res) => {
    let sql = 'SELECT Name FROM City WHERE CountryCode = "NLD"';
    let query = db.query(sql, (err, results) => {
        if (err) throw err;
        console.log(results);
        res.send(results);
    });
});

//     What is the population of Rotterdam ?
app.get('/query/7', (req, res) => {
    let sql = 'SELECT Population FROM City WHERE Name = "Rotterdam"';
    let query = db.query(sql, (err, results) => {
        if (err) throw err;
        console.log(results);
        res.send(results);
    });
});

//         What's the top 10 countries by Surface Area?
app.get('/query/8', (req, res) => {
    let sql = 'SELECT Name FROM Country ORDER BY SurfaceArea DESC LIMIT 10 ';
    let query = db.query(sql, (err, results) => {
        if (err) throw err;
        console.log(results);
        res.send(results);
    });
});
// What's the top 10 most populated cities?
app.get('/query/9', (req, res) => {
    let sql = 'SELECT Name FROM Country ORDER BY Population DESC LIMIT 10 ';
    let query = db.query(sql, (err, results) => {
        if (err) throw err;
        console.log(results);
        res.send(results);
    });
});
// What is the population number of the world ?
app.get('/query/10', (req, res) => {
    let sql = 'SELECT SUM(Population) FROM Country';
    let query = db.query(sql, (err, results) => {
        if (err) throw err;
        console.log(results);
        res.send(results);
    });
});