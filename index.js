import express from 'express'
import cors from "cors"
import mongoose from 'mongoose'
import usersRoutes from './routes/users.routes.js'

const PORT=process.env.PORT

//Creat express app
const app= express()

// use middlewares
app.use(cors())
app.use(express.json())

// use routes
app.use("/users",usersRoutes)

// connect to databse
await mongoose.connect(process.env.MONGO_URI)

// start express server
app.listen(
    PORT,() =>{
        console.log(
            `sweettooth-api is running port:${PORT}`)
    }
)