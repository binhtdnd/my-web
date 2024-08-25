const express = require('express');
const mysql = require('mysql2');
const app = express();
const path = require('path')
const cors = require('cors')
const { MongoClient, ServerApiVersion } = require('mongodb')
const { ObjectId } = require('mongodb')
let trelloDatabaseInstance = null
const MONGODB_URI = 'mongodb+srv://binhtdnd:NrIhONhvy1DjxGO8@cluster0.2dcsz.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'
const DATABASE_NAME = 'japan'
const BOARD_COLLECTION_NAME = 'n5'
const bodyPaser = require('body-parser')
const mongoClientInstance = new MongoClient(MONGODB_URI, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true
    }
})

const CONNECT_DB = async () => {
    // gọi kết nối tới MongoDB Atlas với URI đã khai báo trong thân của mongoClientInstance
    await mongoClientInstance.connect()
    // sau await , sau khi ket noi thanh cong, gan bien trelloDatabaseInstance
    trelloDatabaseInstance = mongoClientInstance.db(DATABASE_NAME)
}

var n6 = []
var loadData = false;
CONNECT_DB()
    .then(() => console.log('connected'))
// .then(() => n6 = getDB())
// .then(loadData = true)


app.use(express.static(path.join(__dirname + "/public")))
app.use(express.urlencoded({ extended: true }));

// parse application/json
app.use(express.json());
app.use(cors())
app.use(bodyPaser.json({ limit: '30mb' }))
app.use(bodyPaser.urlencoded({ extended: true, limit: '30mb' }))


// const connection = mysql.createConnection({
//     host: '103.200.23.120',
//     user: 'aliceiov_binhtdnd',
//     password: 'mhbbnsbtcm1!qQbinh',
//     database: 'aliceiov_japan'
// });
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'japan'
});
// "proxy": "https://alice-21e1.onrender.com/"
connection.connect(function (err) {
    (err) ? console.log(err) : console.log("You are connected the [server]!!!" + connection);
});

function get(req, res, next) {

    let param = req.query.foo
    // ...
}

const START_SERVER = () => {
    console.log('start server')
    CONNECT_DB()
        .then(() => console.log('connected'))
        .then(() => getDB())
        .catch()
}

START_SERVER()

const getDB = async () => {
    if (trelloDatabaseInstance) {
        console.log('getdetail func')
    }

    try {
        // console.log('test: ', id)
        // const result = await trelloDatabaseInstance.collection(BOARD_COLLECTION_NAME).find()
        const result = await trelloDatabaseInstance.collection('n6').find({
        }).toArray()
        n6 = result

        return JSON.stringify(result)
    } catch (erorr) { throw new Error(erorr) }
}
app.get('/api/wordsMong', (req, res) => {
    console.log("n6 from api: ", n6)
    res.json({ data: n6 });
});

app.get('/api/words', (req, res) => {

    let courses = req.query.courses
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
app.get('/api/noremember', (req, res) => {

    let courses = req.query.courses
    listSt = req.query.listNoRemember
    var sql = `SELECT * FROM ${courses} WHERE 0`
    if (listSt) {
        sql = `SELECT * FROM ${courses} WHERE stt in (${listSt})`
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



app.listen(5000, () => console.log('App listening on port 5000 [Server]'));