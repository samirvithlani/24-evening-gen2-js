const bookTicket = ()=>{

    console.log("Booking ticket...")
    var promise = new Promise((resolve,reject)=>{

        setTimeout(() => {
            resolve({id:"1001",price:900,status:"success"})        
        }, 3000);

    })

    return promise;

}


const printTicket = ()=>{

    var x = bookTicket()
    x.then((data)=>{
        console.log(data)
        console.log("ticket has been booked successfully...")
    })
    x.catch((err)=>{
        console.log(err)
    })
}

printTicket()