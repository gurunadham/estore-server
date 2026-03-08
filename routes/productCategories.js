const express = require('express');
const pool = require('../shared/pool');
// const mysql = require('mysql2');
const productCategories = express();


// const pool = mysql.createPool({
//     host: 'localhost',
//     user: 'root',
//     password: 'root',
//     database: 'estore',
//     waitForConnections: true,
// });



productCategories.get('/', (req, res) => {
    // pool.getConnection((err, connection) => {
    //     if (err) {
    //         res.status(500).send(err);
    //     } else {
            pool.query('SELECT * FROM categories', (err, results) => {
                if (err) {
                    res.status(500).send(err);
                } else {
                    res.status(200).json(results);
                    // res.status(200).send('Connected to the database!')
                }
            });
    //     }
    // });
});

module.exports = productCategories;