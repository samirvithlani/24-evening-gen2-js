const submitHandler = (event)=>{
    event.preventDefault()
    
    const name = document.getElementById("name")
    console.log(name.value)
    const hobbies = document.getElementsByName("hobbies")
    
    for(let i=0;i<hobbies.length;i++){
        if(hobbies[i].checked){
            console.log(hobbies[i].value)
        }
    }

    const range = document.getElementById("range")
    console.log(range.value)
}