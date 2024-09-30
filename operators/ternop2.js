var no1 =10, no2 = 20, no3 = 30;
var max = no1> no2 && no1 >no3 ? no1 :
no2 >no1 && no2 > no3 ? no2 :
no3;
console.log(max);



var temp =45;

var weather = temp > 40 ? "very hot" :
temp > 30 ? "hot" :
temp > 20 ? "moderate" :
"cool";
console.log(weather);


var perc = 82;
var grade = perc>=80 ? "A" :
perc >=70 ? "B" :
perc >=60 ? "C" :
"D";

console.log(grade);




// if(no1>no2 && no1>no3){
//     max = no1;
// }
// else if(no2> no1 && no2 > no3){
//     max = no2;
// }
// else{
//     max = no3;
// }