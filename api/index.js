import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
dotenv.config()
const app = express();

mongoose.connect(process.env.MONGO_URI)
        .then(()=>{
            console.log("mongoDB connected")
        })
        .catch(err=>{
            console.log("Error in connections of DB : ",err)
        })

app.listen(3000,()=>{
    console.log('Server is running on port 3000')
})