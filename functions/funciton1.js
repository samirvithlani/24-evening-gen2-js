//function name(param){}

//without parameter //without return
function add(){
    let a =100, b=200,c;
    c = a+b;
    console.log('Addition',c);
}

add(); //calling function


function greetings(){

    var time ="22:00";
    if(time >= "00:00" && time < "12:00"){
        console.log('Good Morning');
    }
    else if(time >= "12:00" && time < "16:00"){
        console.log('Good Afternoon');
    }
    else if(time >= "16:00" && time < "21:00"){
        console.log('Good Evening');
    }
    else{
        console.log('Good Night');
    }


}
greetings();