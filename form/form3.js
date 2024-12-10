const handleSubmit =(event)=>{
    event.preventDefault();
    const name = document.getElementById("name")
    const nameError = document.getElementById("nameError")
    if(name.value.length<=0){
        //console.log("Name is Required*")
        nameError.innerHTML="Name is Required*"
        nameError.style.color="red"
    }
    else{
        nameError.innerHTML = ""
    }


}