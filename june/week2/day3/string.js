// rest loop
// for-in loop
// for-of loop

// create a object
let obj={
    name:"xyz",
    age:20
}

console.log(obj.name)
console.log(obj.age)

console.log(obj["name"])
console.log(obj["age"])

obj.name="y";
console.log(obj.name)


// create a array
let arr=[1,2,3,4,5,6];
console.log(arr[0])
console.log(arr[1])


// for in loop
for(let key in obj){
    console.log(obj[key])
}

for(let idx in arr){
    console.log(arr[idx])
}

console.log("for of loop")
// for of loop
for (const element of arr) {
    console.log(element)
}

// for(let ele of obj){
//     console.log(ele)
// }


// string 
let str="Qlith";
// let str1='Qlith';
// let str2=`Qlith`;

console.log(str[1])

str[0]="E";
console.log(str)

// property
console.log(str.length)
// methods
// 1.toUpperCase()
// 2.toLowerCase()
// 3.trim()
// 4.slice()
// 5.subString()
// 6.replace()
// 7.concat()

console.log(str.toLowerCase())
console.log(str.toUpperCase())
console.log(str.trim().length)
console.log(str.slice(0,2))
console.log(str.substring(-2))

console.log("Qlith "+"Innovation")
console.log("Qlith ".concat("Innovation"))

console.log(str.replace("Q","E"));
console.log(str)

// arrays methods
// 1.push()
// 2.pop()
// 3.unshift()
// 4.shift()
// 5.splice()
// 6.slice()

let arr1=[1,2,3,4,5,6];
console.log(arr1)
// to add or remove from the last
arr1.push(7,8);
console.log(arr1)
arr1.pop()
console.log(arr1)

// to add or remove from the first
arr1.unshift(0);
console.log(arr1)
arr1.shift()
console.log(arr1)

// length property
console.log(arr1.length)

console.log(arr1.slice(0,5))

arr1.splice(2,2,30);
console.log(arr1)



