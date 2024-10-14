var data= ["amit","sumit","krihsna","ram"];


// for(let i=0;i<data.length;i++){
//     console.log(data[i]);
// }

// data.forEach((d)=>{
//     console.log(d);
// })

// var upperData =[];

// for(let i=0;i<data.length;i++){

//     upperData.push(data[i].toUpperCase());
// }
// console.log(upperData);

var upperData = data.map((d)=>{
    //d -> "amit"
    return d.toUpperCase();
})
console.log(upperData);



var sales = [10,12,10,14,15,20,18]

// var salesWithTax = [];

// for(let i=0;i<sales.length;i++){

//     // let tax = sales[i]*0.18;
//     // salesWithTax.push(sales[i]+tax)

//     salesWithTax.push(sales[i]+sales[i]*0.18)

// }
// console.log(salesWithTax);


var salesWithTax = sales.map((s)=>{
    return s+s*0.18;
})

console.log(salesWithTax);