import express from 'express';
import cors from 'cors';
import { connectDataBase } from './config/db.js';


//app config

const app = express();
const port = 4000


//middleware 
app.use (express.json());
app.use (cors());


//db connection
connectDataBase();

app.get('/', (req, res) =>{
    res.send(" hello Api working at http://localhost:4000")
});

app.listen(port,()=>{
    console.log("listening on port",port);
});

