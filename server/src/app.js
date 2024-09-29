import express from "express";
import mongoose from "mongoose";
import apiRoute, { apiProtected } from "./routes/api.js";
import { DB_CONNECT } from "./utils/constant.js";
import AuthMidddleware from "./middlewares/AuthMiddleware.js";
import cors from 'cors'

const app = express();

mongoose.connect(DB_CONNECT,
      { useNewUrlParser:true, useUnifiedTopology:true })
      .then(()=>console.log('Connected')).catch((e)=>console.log("ERROR",e)); 

const PORT = 8000

app.use(cors())
app.use(express.json())
app.use('/api/', apiRoute);
app.use('/api/', AuthMidddleware, apiProtected);
 
app.listen(PORT,()=>console.log("SERVER IS RUNNING"))



