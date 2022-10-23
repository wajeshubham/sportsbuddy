import express from 'express'
import mongoose from 'mongoose'
import morgan from 'morgan'
import cors from 'cors'
import dotenv from 'dotenv'
// import user from './routes/users.js';
import profile from './routes/profile.js';
import auth from './routes/auth.js';
import event from './routes/event.js';
import cookieParser from "cookie-parser";
import path from "path"
dotenv.config();


//app

const app = express();

app.use(cors({origin:true,credentials:true}));
app.use(express.urlencoded({extended: true}));


//db
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log('db connected'))
.catch((err)=>console.log('err',err))

//midleware
app.use(cookieParser())
app.use(express.json());
app.use(morgan('dev'));

//routes
// app.use('/',user);
app.use('/',profile);
app.use('/',auth);
app.use('/',event);

//port

const port = process.env.PORT || 8080;
//listener

const server = app.listen(port,()=>{console.log(`listening on port '${port}`)});

