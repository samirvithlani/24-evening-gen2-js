let x = 100
console.log("value of x outside block = ",x)

{

    console.log("value of x inside block = ",x)

    let y =200
    console.log("value of y inside block = ",y)
}
//console.log("value of y outside block = ",y)

let p =90
console.log("value of p = ",p)
//var p = 91 //compile time error
console.log("value of p = ",p)

var x1 =1000
let x1 = 1200
console.log("value of x1 = ",x1)
