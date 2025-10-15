import express from 'express';
import cors from 'cors'
import connectDB from './config/database.js';
import mainRouter from './Routes/router.js'
import { fileURLToPath } from "url";
import dotenv from 'dotenv'
import path from 'path';
dotenv.config()
const app = express();


app.use(cors("*"))
app.use(express.json());

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


 await connectDB();

 app.use('/uploads', express.static(path.join(__dirname, 'public/uploads')));
 app.use('/api',mainRouter)

 app.use((error, req, res, next) => {
    console.error("Error:", error.message);
    res.status(500).json({ message: "Internal Server Error" });
});
 


app.listen(2000,()=>{
    console.log('2000 port connected')
})