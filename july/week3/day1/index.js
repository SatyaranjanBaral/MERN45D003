const express=require("express");
const router=express.Router();

const app =express();
app.use(express.json())
const port =8000;
app.use ("/api",router);



router.get("/",(req,res)=>{
    res.send("router get method called");
})




// app.get("/",(req,res)=>{

//     const obj=req.query;
//     console.log(obj.name);
//      console.log(obj.age);
//       console.log(obj.email);
//       console.log(obj.pass);
//       res.send("get method called")
// })


// app.post("/user",(req,res)=>{
    // const userobj=req.body
    // console.log(userobj)
//     const{name,age,email,pass}=req.body;
//     console.log(name,email,age,pass);
    
//     res.send("post method is called")
// })


// app.put("/user/:id",(req,res)=>{

//     const{id}=req.params;
//     res.send(`id is:${id}`);
// })

// app.delete("/user/:id",(req,res)=>{

//     const {id}=req.params;
//     res.send(`delete method called id:${id}`)
// })


// app.patch("/user/:id/",(req,res)=>{
//     const {id}=req.params;
//     res.send(`patch method called id:${id}`)
// })


app .listen(port,()=>{
console.log("my server is running on the port",port);

});