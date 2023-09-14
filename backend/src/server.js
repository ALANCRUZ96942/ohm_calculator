/*IMPORTS*/
import express from 'express'
import dotenv from 'dotenv'
import morgan from 'morgan'

dotenv.config()

/*Sets up the Express App*/
const app = express();
const PORT = process.env.PORT;
app.set('port', PORT);

/*MIDDLEWARES*/
app.use(morgan("dev"));

export default app;