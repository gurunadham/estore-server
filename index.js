const express = require('express');
const app = express();
const PORT = process.env.PORT || 5001;

const server = app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

app.get('/', (req, res) => {
    let prodData = {
        pName : 'iPhone 14 Pro Max',
        pPrice : 1099,
        pImg :"shop-1.jpg"
    }
    // res.send('<h1>Welcome to the eStore API!</h1>');
    res.status(200).send(prodData);
    // res.json(prodData);
});