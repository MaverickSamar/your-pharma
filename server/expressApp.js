const express = require('express');
const cors = require('cors');

const customer = require('./src/api/customer');
const products = require('./src/api/product');
const shopping = require('./src/api/shopping');

//handling errors


module.exports = async(app) => {

    app.use(express.json({limit: '1mb'}));
    app.use(express.urlencoded({extended:true, limit:'1mb'}));
    app.use(cors());

    app.use(express.static(__dirname + '/public'))

    //api

    customer(app);
    products(app);
    shopping(app);

    // handle errors
    // app.use(handlerrors);
}
