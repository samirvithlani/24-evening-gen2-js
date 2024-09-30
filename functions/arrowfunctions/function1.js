function add(){
    console.log("This is add function");
}
//var let const
// add();


const add1 = ()=>{
    console.log("This is add1 function");
}

add1();


function sum(a,b){
    //with argument without return type
    console.log("This is sum function");
}

const sum1 = (a,b)=>{
    //with argument without return type
    console.log("This is sum1 function");
}


//with argument with return type

// function mul(a,b,c){
//     return a*b*c;
// }


// const mul = (a,b,c)=>{
//     return a*b*c;
// }

//single line arrow function

const mul = (a,b,c)=> a*b*c;

var ans = mul(10,20,30);
console.log(ans); // 6000


// const getFullName = (fname,lname)=>{
//     return fname + " "+lname;
// }

const getFullName = (fname,lname) => fname + " "+lname;
var fullName = getFullName("Ram","Sharma");
console.log(fullName); 

