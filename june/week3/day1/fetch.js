console.log("fetch method");


// let Promise=new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         console.log("promise executed");
//         resolve("ex")
//         reject("reject")
        
//     },2000)

// })
// console.group(promise)
 
// function getUserData (userId){
//     return new Promise ((resolve ,reject)=>{
//         setTimeout(()=>{
//             console.log("user id: ",userId);
//             resolve("sucess");
            

//         },1000)

//     })

// }
// getUserData("Collection of data").then((e)=>{
//     return getUserData("Enter ur name").then(()=>{
//         return getUserData("Enter ur age").then(()=>{
//             return getUserData("Enter ur ph no")
//         })
//     })
// })


async function fetchMethod() {
    let response=await fetch("https://jsonplaceholder.typicode.com/posts");
    console.log(response);
    let data=await response.json()
    console.log(data);
    data.forEach(element => {
        console.log(element.id,element.title)
        
        
    });
    
    
    
}
fetchMethod()