const getData = ()=>{

    //return 100
    //return "hi"
    //return false
    //return ["19"]
    //return {}

    var promise = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("promise has been resolved...")
        },2000)
    })
    return promise
}

// var x = getData(); //number
// console.log(x) //pendig
// x.then((data)=>{
//     console.log(data)
// })

