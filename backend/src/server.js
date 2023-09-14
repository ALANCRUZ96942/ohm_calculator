/*IMPORTS*/
import express from 'express'
import dotenv from 'dotenv'
import morgan from 'morgan'
import sequelize from './database/db'
dotenv.config()

/*Set up the Express App*/
const app = express();
const PORT = process.env.PORT || 4000;
app.set('port', PORT);

/*MIDDLEWARES*/
app.use(morgan("dev"));


/*RUN THE SERVER */
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
    try {
        sequelize.authenticate();
        console.log('Connection has been established successfully.');
      } catch (error) {
        console.error('Unable to connect to the database:', error);
      }

});

