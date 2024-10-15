//map + filter
var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

var res = arr.map((a)=>{
    return a*a;
}).filter((a)=>{
    return a > 50
})
console.log(res); // [64, 81]


var names = ["naman","ankit","madam"]
//return only palindrome names...

var palindromNames = names.filter((name)=>{
    //"naman" --> ['n','a','m','a',"n"] ==>reverse==>['n','a','m','a',"n"] ==>join==> "naman"
    return name === name.split("").reverse().join("");
})
console.log(palindromNames); // ["nam
