const express = require('express')
const app = express();
const dataBase = require('./config/database');
const dotenv = require('dotenv');
const userRouter = require('./Routes/Route')
dotenv.config()
const cors = require('cors')

app.use(cors())
app.use(express.json())
app.use(userRouter)
/* create  */










app.listen(process.env.PORT || 7007 , ()=>{
    console.log(`server is running on ${process.env.PORT}`)
}
)