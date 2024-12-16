const myDiv = document.getElementById("mydiv")

myDiv.addEventListener("mouseenter",function(){
    myDiv.style.backgroundColor="red"
})
myDiv.addEventListener("mouseleave",()=>{
    myDiv.style.backgroundColor="black"
})
myDiv.addEventListener("click",()=>{
    myDiv.style.height="400px"
    myDiv.style.width="400px"
})
myDiv.addEventListener("dblclick",()=>{
    myDiv.style.height="200px"
    myDiv.style.width="200px"
})

const btn = document.getElementById("btn")
btn.addEventListener("click",()=>{
    alert("button clicked...")
})
btn.addEventListener("mouseenter",()=>{
    btn.style.backgroundColor="green"
})
btn.addEventListener("mouseleave",()=>{
    btn.disabled = true

})