var users = [
    {
            id:1,
            name:"John",
    },
    {
            id:2,
            name:"Peter",
    },
    {
            id:3,
            name:"Sally",
    }
]

//map

// var usersName = users.map((user)=>{
//     return user.name;
// })
var usersName = users.map((user)=>user.name);
console.log(usersName);


var newUser = users.map((user)=>{
    return{
        id:user.id +1000,
        uName:user.name.toUpperCase()
    }
})
console.log(newUser);