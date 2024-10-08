//some every


var marks = [21,22,23,22,24,19]
//var flag = false;
// for(let i=0;i<marks.length;i++){


//         if(marks[i]>=25){
//             flag = true;
//             break;
//         }


// }

//m == marks[i]
// var flag = marks.some(function(m){
//     return m>=24;
// })

// var flag = marks.some((m)=>{
//     return m>=24;
// })

var flag = marks.some((m)=>m>=24)
console.log(flag);
