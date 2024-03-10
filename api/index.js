import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
dotenv.config()
const app = express();

import userRoutes  from './routes/user.route.js'
import authRoutes from './routes/auth.route.js'


mongoose.connect(process.env.MONGO_URI)
        .then(()=>{
            console.log("mongoDB connected")
        })
        .catch(err=>{
            console.log("Error in connections of DB : ",err)
        })
        
        app.use((err,req,res,next)=>{
            const statusCode =err.statusCode || 500;
            const message =err.message || 'Internal server error';
            res.statusCode(statusCode).json({
                success:false,
                statusCode,
                message,
            })
        })
        
        app.use(express.json())
        app.use('/api/user',userRoutes)
        app.use('/api/auth',authRoutes)
app.listen(3000,()=>{
    console.log('Server is running on port 3000')
})