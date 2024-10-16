import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRouter from './routes/user.route.js';
import authRouter from './routes/auth.route.js';
import requestRouter from './routes/request.route.js'
import cookieParser from 'cookie-parser';

dotenv.config()

mongoose.connect(process.env.MONGO_URL)
.then(() => {
    console.log("Connected to Database.")
})
.catch((err) => {
    console.log(err)
})

const app = express();
app.use(express.json())
app.use(cookieParser())

app.use("/api/user",userRouter);
app.use("/api/auth",authRouter);
app.use("/api/request",requestRouter);

app.listen(3000, () => {
    console.log("Server is running on the port 3000");
})      

app.use((err,req,res,next) => {
    const statusCode = err.satusCode || 500;
    const message = err.message || 'Internal server error';
    return res.status(statusCode).json({
        success : false,
        statusCode,
        message,
    })
})