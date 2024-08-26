var no = 5; // 5 *4 *3 *2 *1 = 120
var fact =1;
for(let i = 1;i<=no;i++){

    //1 = 1 *1 = 1
    //1 = 1 *2 = 2
    //2 = 2 *3 = 6
    //6 = 6 *4 = 24
    //24 = 24 *5 = 120
    fact = fact * i;

}

console.log(fact); //120