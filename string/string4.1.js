// var x = "india";

// var index = -1;

// for(let i=0;i<x.length;i++){
    
//     //x[0] == "d" false
//     //x[1] == "d" false
//     //x[2] == "d" true
//     if(x[i]=="p"){
//         index = i;
//         break;
//     }
// }
// console.log(index) // 0

// var x = "india";

// var index = -1;

// for(let i=0;i<x.length;i++){
    
//     //x[0] == "i" true
//     //x[1] == "n" false
//     //x[2] == "d" false
//     //x[3] == "i" true
//     //x[4] == "a" false
//     if(x[i]=="i"){
//         //0 //3
//         index = i;
//     }
// }
// console.log(index) // 0



var x = "india is democratic country";
var boundry = 4;

var index = -1;

for(let i=boundry;i<x.length;i++){
    
    //x[0] == "d" false
    //x[1] == "d" false
    //x[2] == "d" true
    if(x[i]=="d"){
        index = i;
        break;
    }
}
console.log(index) // 0
