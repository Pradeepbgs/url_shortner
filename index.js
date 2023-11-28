import express from 'express';
import { connectDB } from './db/mongo.connect.js';
import routerUrl from './routes/app.js';
import dotenv from 'dotenv';
dotenv.config();
// import { Url } from './models/url.model.js';

const app = express(); 
const PORT = process.env.PORT || 3000;

connectDB()

app.use(express.static('public'));
app.set('view engine', 'ejs');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/',routerUrl)


app.listen(PORT, () => {
    console.log('Server running on port 3000');
})
