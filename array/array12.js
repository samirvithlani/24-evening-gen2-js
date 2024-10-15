//map : will return all elements
//filter:

var users  = ["amit","raj","parth","ananya","akshit","kunal"]

// var filUsers =[];

// for(let i=0;i<users.length;i++){

//     if(users[i].startsWith("a")){
//         filUsers.push(users[i]);
//     }
// }


var filUsers = users.filter((user)=>{
    //amit
    //that condition must retutrn true or false
    return user.startsWith("a");
})

console.log(filUsers);

var filUser1 = users.filter((user)=>{
    return user.length>5;
})
console.log(filUser1);

var sales = [123,345,567,988,6545]

var filSales = sales.filter((sale)=>{
    return sale>500;
})
console.log(filSales);