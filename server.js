//vars
const http = require('http')
const express = require('express')
const port = process.env.PORT || 3006;
const app = require('./app')
const server = http.createServer(app);

app.listen(port, () =>{
      console.log("Express started at http://localhost:"+port)
})