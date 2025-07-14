// to import the package


// const http=require("http");
// const port=9000;

// server creation


//  const myServer =http.createServer((req,res)=>{
//     console.log("request is accepted",port);
//     res.end("<h1>This is my response</h1>");
    
// })
// myServer.listen(" server is running on port",port);


// myServer.listen(port,()=>{
//     console.log("My server is running on port",port);
    
// })

const express=require("express");

const app=express();

const port=9000;

app.get("/",(req,res)=>{
    console.log("request accepted");
    res.send("<h1>Response Sended</h1>");
    
})

app.post("/user",(req,res)=>{
 
    res.send("<h1>Request Sended</h1>");
    
})
app.listen(port,()=>{
    console.log(`server is running on port ${port}`);
    
})