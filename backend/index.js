const express =  require('express')
require('dotenv').config()
const mongoose = require('mongoose')
const cookieParser = require('cookie-parser')
const cors = require('cors')

const app = express();

//Dataconnection
const connectDB = async()=>{
    try {
        await mongoose.connect(process.env.MONGO_DB_URL)
        console.log("connected to db")
    } catch (error) {
        throw error;
    }
}

//middlewares
app.use(cors());
app.use(cookieParser())
app.use(express.json())

connectDB()
.then(()=>{
    app.listen(8080,()=>{
        console.log('server listening at http://localhost:8080')
    })
})
