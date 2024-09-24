function add(){

    console.log("This is add function");

    return 100;
}

var ans = add();
console.log(ans); // 100

function sub(){
    let a =100,b=20;

    return a -b;
}

var ans = sub();
console.log(ans); // 80


function getPower(){
    let base = 2,p=5;

    return 2**5;
}
var p = getPower();
console.log(p); // 32