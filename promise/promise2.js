//promise:
//zomato->search dish[2]->addtocart[2]-->placeorder[3]->upi[4]-->res[2]-->deli[2]->[200]


const zomato = ()=>{

    console.log("ordering food...")

    var promise = new Promise((resolve,reject)=>{
        setTimeout(() => {
                resolve({orderId:101,dishName:"pizza",qty:1,amount:400,status:"accepted"})
        }, 3000);
    })
    console.log(promise)
    promise.then((order)=>{
        console.log(order)
        console.log("order has been delivered")

    })
    



}

zomato()