var age = 18;
if(age>=18){
    console.log("You are eligible to vote");
}
else{
    console.log("You are not eligible to vote");
}

age>=18 ? console.log("you are eligible to vote") : console.log("You are not eligible to vote");


var num = 12;
num %2 ==0 ? console.log("Even") : console.log("Odd");


var no1 = 10, no2 = 20
var max;

if(no1>no2){
    max = no1;
}
else{
    max = no2;
}
console.log(max);

var max1 = no1>no2 ? no1 : no2;
console.log(max1);


var country = "sri lanka";
var flag = country.includes(" ")? true : false;
console.log(flag);

// if(country.includes(" ")){
//     flag = true;
// }
// else{
//     flag = false;
// }



