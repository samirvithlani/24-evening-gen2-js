var str1 = "royal"
var copystr =""
for(let i=0;i<str1.length;i++){

    //"" =  "" + r = r
    //r = "r"+o = ro
    //ro = "ro" + y = roy
    //roy = "roy" + a = roya
    //roya = "roya" + l = royal
    copystr = copystr + str1[i]

}
console.log(copystr)
// var str = str1
// console.log(str)

var country = "India"
var revstr = ""

//india = 5
for(let i = country.length-1;i>=0;i--){
    //console.log(country[i])
    revstr = revstr + country[i]
}

console.log(revstr)

if(revstr == country){
    console.log("palindrome")
}
else{
    console.log("not palindrome")
}





