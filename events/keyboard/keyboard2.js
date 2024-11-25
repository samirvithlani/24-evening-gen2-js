const emails = [
    "ram@gmail.com",
    "shyam@gmail.com",
    "amit@gmail.com"
]

const checkData = ()=>{

    const email = document.getElementById("email").value
    console.log(email)
    var found = emails.find((e)=>e==email)
    console.log(found)
    const txt = document.getElementById("txt")
    if(found){
        txt.innerHTML="Email already taken*"
    }
    else{
        txt.innerHTML="Email available "
    }


}