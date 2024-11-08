//Config my server
import express from "express";
import cors from 'cors'
import morgan from "morgan";
import connectDB from "./config/conection";
import userRoutes from './routes/user.routes'
connectDB();



const app = express()
app.set('port', process.env.PORT || 3000)
app.use(cors())
app.use(morgan('dev'))
app.use(express.json())
app.use('/api', userRoutes);

app.get('/ping',(req:express.Request,res:express.Response)=>{
    try {
        res.json({message:"Hello word"})
    } catch (error) {
        console.log(error);
        
    }
})
export default app