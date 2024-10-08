var marks = [21,22,23,22,24,19]


// var flag = true;

// for(let i=0;i<marks.length;i++){


//     if(marks[i]<10){
//         flag = false;
//         break;
//     }


// }

var flag = marks.every((m)=>{
    return m>=20;
})

console.log(flag);
