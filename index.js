import express from 'express';
import { connectDB } from './db/mongo.connect.js';
import routerUrl from './routes/app.js';
import { Url } from './models/url.model.js';

const app = express(); 
const port = 3000;

connectDB()


app.use(express.json());
app.use('/',routerUrl)


app.listen(port, () => {
    console.log('Server running on port 3000');
})