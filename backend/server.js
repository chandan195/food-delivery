import express from 'express';
import cors from 'cors';
import { connectDataBase } from './config/db.js';
import foodRouter from './routes/foodRoute.js';
import userRouter from "./routes/userRoute.js"
import "dotenv/config"
import cardRouter from './routes/cardRoute.js';

//app config

const app = express();
const port = 4000


//middleware 
app.use (express.json());
app.use (cors());


//!db connection
connectDataBase();



// api endpoints
 app.use("/api/food" ,foodRouter)

 app.use("/images",express.static('uploads'));
 app.use("/api/user",userRouter);

 app.use("/api/cart",cardRouter);


app.get('/', (req, res) =>{
    res.send(" hello Api working at http://localhost:4000")
});

app.listen(port,()=>{
    console.log("listening on port",port);
});

