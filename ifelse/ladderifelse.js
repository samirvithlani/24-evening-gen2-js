var income = 50000 // monthly income
//yearly income 500000 or more 10 %
//yearly icome 7l  15 %

var yearlyincome = income * 12

if(yearlyincome>=1000000){

    console.log("Tax is 20%")

}
else if(yearlyincome>=700000){
    console.log("Tax is 15%")
}
else if(yearlyincome>=500000){

    console.log("Tax is 10%")
}
else{
    console.log("No Tax")
}