const express = require('express');
const productCategories = require('./routes/productCategories');
// const mysql = require('mysql2');'
const products = require('./routes/product');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 5001;

// const pool = mysql.createPool({
//     host: 'localhost',
//     user: 'root',
//     password: 'root',
//     database: 'estore',
//     waitForConnections: true,
// });

app.use(cors());
app.use("/productCategories", productCategories);
app.use("/products", products);

const server = app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

// app.get('/', (req, res) => {
    // let prodData = {
    //     pName : 'Jackets',
    //     pPrice : 1099,
    //     pImg :"shop-1.jpg"
    // }
    // res.send('<h1>Welcome to the eStore API!</h1>');
    // res.status(200).send(prodData);
    // res.json(prodData);
    // });

// app.get('/', (req, res) => {
//     // pool.getConnection((err, connection) => {
//     //     if (err) {
//     //         res.status(500).send(err);
//     //     } else {
//             pool.query('SELECT * FROM categories', (err, results) => {
//                 if (err) {
//                     res.status(500).send(err);
//                 } else {
//                     res.status(200).json(results);
//                     // res.status(200).send('Connected to the database!');
//                 }
//             });
//     //     }
//     // });
// });