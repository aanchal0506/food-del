import express from 'express';
import cors from 'cors';
import { connectDb } from './config/db.js';
import foodRouter from './routes/foodRoute.js';
//app config 
const app = express();
const port=4000;
//middlewares
app.use(cors());
app.use(express.json());
app.use("/uploads", express.static("uploads"));


//db config
connectDb();
//api end point
app.use('/api/food',foodRouter)
app.get('/', (req, res) => {
    res.send("API is running...");
});
app.listen(port, () => {
    console.log(`Server is running on port: http://localhost:${port}`);
});

