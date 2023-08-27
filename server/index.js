import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import PostRoutes from'./routes/posts.js'

const app=express();
//using of routes 
app.use('/posts',PostRoutes)

app.use(bodyParser.json({limit:"30mb",extended:true}))
app.use(bodyParser.urlencoded({limit:"30mb",extended:true}))
app.use(cors());

//connecting to the database

const CONNECTION_URL='mongodb+srv://Rakshith:Rakshith55@cluster0.6c9rees.mongodb.net/';
const PORT=process.env.PORT || 5000;
mongoose.connect(CONNECTION_URL)
.then(()=>app.listen(PORT,()=>console.log('The servere is running on the port 5000')))
.catch((error)=>console.log(error.message));

