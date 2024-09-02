var chance = 3
//true
//true
while(chance>0){
    var amount = parseInt(prompt("enter op balance.. remaining chancees = "+chance)) //1200 //17000
    
    //true
    //check NaN
    if(isNaN(amount)){
        console.error("please enter valid amount..")
        continue
    }
    if(amount<10000){
        chance-- //2
        console.error("you are not eligible for op account..")
    }
    else{
        console.log("you are eligible for credit card")
        break
    }
}
