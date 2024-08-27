var no =54748;
var temp = no;
var temp1 = no;
var rem =0;
var sum =0;
var noofdigits =0;


while(temp1>0 ){ 
    temp1 = Math.floor(temp1/10); //1634/10 = 163//16//1//0
    noofdigits++;
}

//temp1 =0
//no == 0
console.log("noofdigits..",noofdigits);
//15>0
//1>0
//0>0 false
while(no>0){

        rem = no % 10; //3//5//1
        sum = sum +rem ** noofdigits; //27
        //27= 27 + 125 = 152
        //152 = 152 + 1 = 153
        no = Math.floor(no/10); //15 //1 //0

}

if(temp == sum){
    console.log("Armstrong number");
}
else{
    console.log("Not an Armstrong number");
}
