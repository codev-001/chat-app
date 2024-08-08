import express from "express";
import dotenv from "dotenv";
import connectToMongodb from "./db/connectToMongodb.js";
import authRoutes from "../backend/Routes/auth.routes.js"
import messageRoutes from "../backend/Routes/message.route.js"
import userRoutes from "../backend/Routes/user.routes.js"

import cookieParser from "cookie-parser";


const app=express();
const PORT=process.env.PORT || 5000 ;

dotenv.config()


app.use(express.json());
app.use(cookieParser());

app.use("/api/auth",authRoutes)
app.use("/api/messages",messageRoutes)
app.use("/api/users",userRoutes)



app.listen(PORT,() => {
    connectToMongodb();
    console.log(`Server is running at port ${PORT}:`) 


})
