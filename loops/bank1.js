var chance = 3
//true
//true
var amount = parseInt(prompt("enter op balance.. remaining chancees = "+chance)) //1200 //17000
while(chance>0){
    
    
    //true
    //check NaN
    if(isNaN(amount)){
        //console.error("please enter valid amount..")
        chance-- 
        amount = parseInt(prompt("please enter valid amount.. remaining chancees = "+chance))
        //continue
    }
    if(amount<10000){
        
        chance-- //2
        //console.error("you are not eligible for op account..")
        amount = parseInt(prompt("you have entered amount less than 10000.. please enter valid amount.. remaining chancees = "+chance))
        
    }
    else{
        console.log("you are eligible for credit card")
        break
    }
}
