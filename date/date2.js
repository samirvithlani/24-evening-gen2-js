var date = new Date(2022,11,10,16,30)
//1st param year
//2nd param month
//3rd param date
//4th hour
//5th min
console.log(date)

//string conversation...


var today = new Date()

console.log(today.toString())
console.log(today.toLocaleString())
console.log(today.toLocaleDateString())
console.log(today.toLocaleTimeString())

//ISO

console.log(today.toISOString()) //UTC time 5.30 plus 14:30 + 5.30: 19:60 20

