// require('dotenv').config({path:'./env'})
import dotenv from "dotenv"
// import mongoose, { connect } from "mongoose";
// import { DB_NAME } from "./constants";
// //iife,star the iife with ;
// import express from "express"
// const app=express()
import connectDB from "./db/index.js";

dotenv.config({
    path:'./env'
})


connectDB()











// ;(async()=>{
//     try{
//         await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
//         app.on("error",(error)=>{
//             console.log("ERRR:",error);
//             throw error
//         })//if db is connected and there is an error with express connection


//         app.listen(process.env.PORT,()=>{
//             console.log(`App is listening on port ${process.env.PORT}`);
//         })
//     }
//     catch(error){
//         console.error("ERROR: ",error)
//         throw err
//     }
// })