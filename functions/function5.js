//with return type with argument..

function add(a,b){

    console.log("This is add function");

    return a+b;

}

var ans = add(100,20)
console.log(ans); // 120

function greet(name){

    return "Hello "+name;
}

var x = greet("ms")

console.log(x); // Hello ms
var y = greet("John")
console.log(y); // Hello John


function getFullName(fname,lname){

    return fname + " "+lname;
}

var fullName = getFullName("Ram","Sharma");
console.log(fullName); // John Doe