const express = require('express');
const mysql = require('mysql2');
const app = express();
const bodyParser = require('body-parser')
const path = require('path')

var jsonParser = bodyParser.json()
var urlencodedParser = bodyParser.urlencoded({ extended: false })

app.use(express.static(path.join(__dirname + "/public")))
const connection = mysql.createConnection({
    host: '103.200.23.120',
    user: 'aliceiov_binhtdnd',
    password: 'mhbbnsbtcm1!qQbinh',
    database: 'aliceiov_japan'
});


connection.connect(function (err) {
    (err) ? console.log(err) : console.log("You are connected the [server]!!!" + connection);
});

function get(req, res, next) {

    let param = req.query.foo
    // ...
}

app.get('/api/courses', (req, res) => {
    let params = req.query.foo

    var sql = "SELECT * FROM courses";

    if (params) {
        sql = "SELECT * FROM courses where name = '" + params + "'"
    }
    connection.query(sql, function (err, results) {
        if (err) throw err;

        res.json({ data: results });
        console.log('course.heheeh: ', results)
    });

});

app.get('/api/words', (req, res) => {

    let courses = req.query.courses
    let sp1 = req.query.sp1
    let sp2 = req.query.sp2
    let ip1 = req.query.ip1
    let ip2 = req.query.ip2

    var sql = `SELECT * FROM ${courses}`;

    if (ip1) {
        sql = `SELECT * FROM ${courses} where stt >= ${ip1} && stt<= ${ip2}`
    }
    connection.query(sql, function (err, results) {
        if (err) throw err;

        res.json({ data: results });

    });
});

app.get('/api/v', (req, res) => {

    let v = req.query.courses


    var sql = `SELECT * FROM ${v}`;


    connection.query(sql, function (err, results) {
        if (err) throw err;

        res.json({ data: results });


    });
});



app.listen(4000, () => console.log('App listening on port 4000 [Server]'));