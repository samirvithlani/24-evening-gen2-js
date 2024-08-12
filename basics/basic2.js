var x = 100;
console.log("value of x = ", x);

{
    //block...
    console.log("value of x inside block = ",x)
    var y = 200
    console.log("value of y inside block = ",y)
}

console.log("value of y outside block = ",y)

var y =250 //redeclaration
console.log("value of y = ",y)