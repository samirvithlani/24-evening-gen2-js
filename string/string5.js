var email = "abc@gmail.com"

//console.log(email[-1])
//var flag = email.includes("@")
var flag = email.includes("@",3)
console.log(flag) // true


//var flag1 = email.startsWith("a")
var flag1 = email.startsWith("c",2)
console.log("false..",flag1) // false


var flag2 = email.endsWith("m")
//var flag2 = email.endsWith("g",6) // 4 will exclude the last character
console.log("flag2",flag2) // true




