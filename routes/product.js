const express = require('express');
const products = express.Router();
const pool = require('../shared/pool');

products.get('/', (req, res) => {
    pool.query('SELECT * FROM products', (error, products) => {
        if(error) res.status(500).send(error);
        else res.status(200).send(products);
    });
});

products.get('/:id', (req, res) => {
    let id = req.params.id;
    pool.query('SELECT * FROM products WHERE id = ?', [id], 
        (error, product) => {
        if(error) res.status(500).send(error);
        else res.status(200).send(product);
    });
});

module.exports = products;