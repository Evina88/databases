const express = require('express');
const mysql = require('mysql');

// Create connection
const db = mysql.createConnection({
    host: 'localhost',
    user: 'hyfuser',
    password: 'hyfpassword',
    database: 'company'
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

// Create DB
app.get('/createdb', (req, res) => {
    let sql = 'CREATE DATABASE company';
    db.query(sql, (err, result) => {
        if (err) throw err;
        console.log(result);
        res.send('Database created...');
    });
});

// Create employees table
app.get('/createemployeestable', (req, res) => {
    let sql = 'CREATE TABLE Employees (emp_num int AUTO_INCREMENT, emp_name VARCHAR(255), salary int, reports_to VARCHAR(255), PRIMARY KEY(emp_num))';
    db.query(sql, (err, result) => {
        if (err) throw err;
        console.log(result);
        res.send('Employees table created...');
    });
});

// Create a table called Departments 
app.get('/createdepartmentstable', (req, res) => {
    let sql = 'CREATE TABLE Departments (dept_num int, dept_name VARCHAR(255), manager VARCHAR(255), PRIMARY KEY(dept_num))';
    db.query(sql, (err, result) => {
        if (err) throw err;
        console.log(result);
        res.send('Departements table created...');
    });
});

// Create a table called Projects 
app.get('/createprojectstable', (req, res) => {
    let sql = 'CREATE TABLE Projects (proj_num int, proj_name VARCHAR(255), starting_date DATE, ending_date DATE, PRIMARY KEY(proj_num))';
    db.query(sql, (err, result) => {
        if (err) throw err;
        console.log(result);
        res.send('Projects table created...');
    });
});


// Insert 10 rows into each table with relevant fields.
// Insertred through MySQL

// Test your code by executing node < FILE_NAME > in the terminal.
//Then check your MySQL database and see if everything has been created as expected