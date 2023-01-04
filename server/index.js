const express = require('express');
const {PORT} = require("./src/config");
const expressApp = require('./expressApp');
const databaseConnection = require('./src/database/connection');


const port = 8000;
const StartServer = async() => {

    const app = express();

    await databaseConnection();

    await expressApp(app);

    app.listen(PORT, ()=> {
        console.log(`listening on port ${PORT}`);
    }).on('error', (err) => {
        console.log(err);
        process.exit();
    })
}
StartServer();
