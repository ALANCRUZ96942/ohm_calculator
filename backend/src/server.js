/*IMPORTS*/
import express from 'express'
import dotenv from 'dotenv'
import morgan from 'morgan'
import sequelize from './database/db'
import cors from 'cors'

dotenv.config();

/*Set up the Express App*/
const app = express();
const PORT = process.env.PORT || 4000;
const api = require("./routes/api")

app.set('port', PORT);

/*MIDDLEWARES*/
app.use(morgan("dev"));

/*CORS CONFIGURATOR */
const corsOptions = {
  origin: process.env.REACT_APP_BASE_URL, 
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true, 
};
console.log(corsOptions);
app.use(cors(corsOptions));


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
