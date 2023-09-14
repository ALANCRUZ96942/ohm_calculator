require('dotenv').config()


module.exports = {    
  username:  process.env.DB_USERNAME || 'root',
  host:  process.env.DB_HOST || "localhost",
  database:  process.env.DATABASE || '',
  password:  process.env.DB_PASSWORD || '',
  dialect: process.env.DB_DIALECT || '',
};
