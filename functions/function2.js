//with param without return type...

//let var const...
//let.
function add(a,b){


    let c;
    c = a+b;
    console.log('Addition',c);

}

add(100,200)

function getAverage(no1,no2,no3){

    console.log('No1',no1);
    console.log('No2',no2);
    console.log('No3',no3);

    var avg = (no1+no2+no3)/3;
    console.log('Average',avg);

}
//getAverage(10,20,30);
//getAverage() -->it will not throw error
//getAverage(10,20,30,40);

var x =10,y=20,z=30;
getAverage(x,y,z);//it is call by value...




function printUserData(user){


    console.log('User',user);
    console.log('User Id',user.id);
    console.log('User Name',user.name);


}

var user ={
    id:1,
    name:'Ravi'
}
//printUserData(user)
//printUserData({id:2,name:'Ram'});




function checkEligibility(age){

    if(age >= 18){
        console.log('Eligible for Vote');
    }
    else{
        console.log('Not Eligible for Vote');
    }

}
checkEligibility(20);