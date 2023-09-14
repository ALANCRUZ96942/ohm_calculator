/*IMPORTS*/
import express from 'express'
import dotenv from 'dotenv'
import morgan from 'morgan'
import sequelize from './database/db'
dotenv.config()

/*Set up the Express App*/
const app = express();
const PORT = process.env.PORT || 4000;
const api = require("./routes/api")

app.set('port', PORT);

/*MIDDLEWARES*/
app.use(morgan("dev"));


/*RUN THE SERVER */
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
    try {
     sequelize.sync({ force: false }); 
      console.log('Database sync');
    } catch (error) {
      console.error('There was an error on database', error);
    }

});

app.use('/api',api)
