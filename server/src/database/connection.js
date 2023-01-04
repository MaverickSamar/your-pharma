const mongoose = require('mongoose');
// const { databaseConnection } = require('.');

const { DB_URL } = require('../config');
// const DB_URL = 'mongodb+srv://teddy:jWXCbOUNbnrRQJ6x@cluster0.v2tpqxy.mongodb.net/?retryWrites=true&w=majority';

module.exports = async() => {

    try{
        await mongoose.connect(DB_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('DB Connected');
    }
    catch(err)
    {
        console.log('Error = ');
        console.log(err);
        process.exit(1);
    }
};

