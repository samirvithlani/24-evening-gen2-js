const bookTicket = ()=>{

    console.log("Booking ticket...")
    var promise = new Promise((resolve,reject)=>{

        setTimeout(() => {
            resolve({id:"1001",price:900,status:"success"})        
        }, 3000);

    })

    return promise;

}


const printTicket = async ()=>{


    //prnding --->resolve | reject -->code ..
    
    var x = await bookTicket()
    console.log(x)
}

printTicket()