import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import mongoose from 'mongoose';
import notesRouter from './routes/notes.js';



const app = express();


app.use(bodyParser.json({ limit: "20mb", extended: true })); //extended:true means values other than string are also accepted
app.use(bodyParser.urlencoded({ limit: "20mb", extended: true }));


app.use(cors());

const CONNECTION_URL = 'mongodb+srv://vivekrealc2:5502@cluster0.7nyc9em.mongodb.net/?retryWrites=true&w=majority';

app.use('/notes',notesRouter);

const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL).then(() => app.listen(PORT, () =>
    console.log(`Connection established and running on port: ${PORT}`)
)).catch((err) => console.log(err.message));