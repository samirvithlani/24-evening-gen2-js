const checkNum = (num) => {


    if(num %2 ==0){
        return "Even";
    }
    else if(num %3 ==0){
        return "Multiple of 3";
    }
    else if(num %5 ==0){
        return "Multiple of 5";
    }
    else{
        return "Odd";
    }
    

}


const check = (no) => checkNum(no);

console.log(check(123))