const express = require ("express")
const server = express()
const PORT = 3002



server.use(express.static("public"))





server.listen(PORT,(error)=>{
    if(error){
       console.log(error) 
    }else {
        console.log(`server is runing on port ${PORT}`)
    }
})