//vars
const db = require("./config/db")
const http = require('http')
const express = require('express')
const port = process.env.PORT || 3006;
const app = require('./app')
const server = http.createServer(app);
const mongoose = require('mongoose')


mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB_URI).then(() =>{
      console.log("MongoDB Connected")
}).catch((err) =>{
      console.log("Error by try to connect MongoDB: "+err)
})


app.listen(port, () =>{
      console.log("Express started at http://localhost:"+port)
})