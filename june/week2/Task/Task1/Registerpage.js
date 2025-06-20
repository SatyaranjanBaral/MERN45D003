let input = document.querySelectorAll("input");
document.querySelector("button").addEventListener("click",()=>{
let userX={
        name:input[0].value,
        age:input[1].value,
        email:input[2].value,
        ph:input[3].value,
        pass:input[4].value,
}
         localStorage.setItem("userData", JSON.stringify(userX));
        


});
document.querySelector("form").addEventListener("submit",(e)=>{
    e.preventDefault();
})


