var users = [["amit",100],["raj",120],["kunal",98]]
// console.log(users);

// for(let i=0;i<users.length;i++){
//     //["amit",100]
//     //["raj",120]
//     //["kunal",98]
//     //console.log(users[i]);

//     //["amit",100]
//     //["raj",120]
//     //["kunal",98]
//     for(let j=0;j<users[i].length;j++){
//         //amit
//         //100
//         console.log(users[i][j]);
//     }
// }


users.forEach((u)=>{
    //["amit",100]
    //["raj",120]
    
    u.forEach((x)=>{
        //amit
        //100

        //raj
        //120
        console.log(x);
    })
})
