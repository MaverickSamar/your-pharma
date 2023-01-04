const dotEnv = require('dotenv');

dotEnv.config();

module.exports = {
    PORT: process.env.PORT,
    DB_URL : process.env.DB,
    APP_SECRET: process.env.APP_SECRET
}