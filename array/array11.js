var users = [["amit",100],["raj",120],["kunal",98]]
var usersName = users.map((u)=>{
    //u == ["amit",100]
    //u == ["raj",120]
    //u == ["kunal",98]
    return u[0];
})
console.log(usersName);
var users1 = [["amit",100,80],["raj",120,100],["kunal",98,120]]

var usersScore = users1.map((u)=>{
    //u=["amit",100,80]
    //return u[1]+u[2];
    return [u[0], u[1]+u[2]];
})

console.log(usersScore);

