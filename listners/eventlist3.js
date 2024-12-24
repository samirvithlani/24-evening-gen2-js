window.addEventListener("DOMContentLoaded",()=>{
    console.log("html page is loaded...")
})

window.addEventListener("resize",()=>{
    console.log("window resize to ",window.innerWidth ,window.innerHeight)
})
// window.addEventListener("online",()=>{
//     console.log('user isonline...')
// })

window.addEventListener("scroll",()=>{
    console.log("scroll ",window.scrollY)
    console.log("scroll",window.scrollX)
})

window.addEventListener("load",()=>{

    console.log("onload....")
})

window.addEventListener("copy",()=>{
    console.log("dont copy...")
})
