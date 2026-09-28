import express from 'express'
import bodyParser from 'body-parser'
import apiRoutes from "./routes/index.js"
import {connect} from "./config/databases.js"
const app=express()
app.use(express.json())
app.use(bodyParser.json())

app.use("/api",apiRoutes);
app.get("/",(req,res)=>{
    res.send("server is running")

})
app.listen(3000,async()=>{
    console.log("server stated")
    await connect()
    console.log("database connected")
})