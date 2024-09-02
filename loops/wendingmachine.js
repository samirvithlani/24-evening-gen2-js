var amount =220.20;
var note500 = 0;
var note200 = 0;
var note100 = 0;
var note50 = 0;
var note20 = 0;
var note10 = 0;
var note5 = 0;
var note2 = 0;
var note1 = 0;
var rem =0
//999 >0
//499>0
//299>0
while(amount>0){


    // 999 >= 500 true
    if(amount>=500){
        amount = amount-500;
        //499
        note500++; //1
    }
    // 499 >= 200 true
    // 299 >= 200 true
    else if(amount>=200){
        amount = amount-200;
        //299
        //99
        note200++;//1//2
    }
    else if(amount>=100){
        amount = amount-100;
        note100++;
    }
    else if(amount>=50){
        amount = amount-50;
        note50++;
    }
    else if(amount>=20){
        amount = amount-20;
        note20++;
    }
    else if(amount>=10){
        amount = amount-10;
        note10++;
    }
    else if(amount>=5){
        amount = amount-5;
        note5++;
    }
    else if(amount>=2){
        amount = amount-2;
        note2++;
    }
    else if(amount>=1){
        amount = amount-1;
        note1++;
    }
    else{
        //.20
            rem = amount;
            amount = 0;
    }

}

console.log("500 notes: "+note500);
console.log("200 notes: "+note200);
console.log("100 notes: "+note100);
console.log("50 notes: "+note50);
console.log("20 notes: "+note20);
console.log("10 notes: "+note10);
console.log("5 notes: "+note5);
console.log("2 notes: "+note2);
console.log("1 notes: "+note1);
console.log("Remaining: "+rem);