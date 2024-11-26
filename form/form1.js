const submitHandler = (event)=>{
    //when form was submitted action attribute called.. 
    //action attribute is expecting a URL to send the data to
    //so we need to prevent that default behavior
    event.preventDefault(); //this will prevent the default behavior of the form
    //console.log("Form submitted");
    const name = document.getElementById("name") //<input type="text" id="name">
    //console.log(name.value);
    const age = document.getElementById("age") //<input type="text" id="age">
    //console.log(age.value);
    const email = document.getElementById("email") //<input type="text" id="email">
    //console.log(email.value);
    const country = document.getElementById("country") //<select id="country">
    //console.log(country.value);

    const favColor = document.getElementById("favColor") //<input type="color" id="favColor">
    console.log(favColor.value);

    //fetch radio button value using name
    const gender = document.getElementsByName("gender")
    console.log(gender);

    const genderValue = document.getElementById("genderValue")

    for(let i = 0;i<gender.length;i++){
        if(gender[i].checked){
            //console.log(gender[i].value)
            genderValue.innerHTML =gender[i].value;
        }

    }




    //fetch result div

    const result = document.getElementById("result") //<div id="result">
    result.style.color = favColor.value;



    const nameValue = document.getElementById("nameValue") 
    nameValue.innerHTML = name.value;
    //nameValue.style.color = favColor.value;
    const ageValue = document.getElementById("ageValue")
    ageValue.innerHTML = age.value;
    //ageValue.style.color = favColor.value
    const emailValue = document.getElementById("emailValue")
    emailValue.innerHTML = email.value;
    //emailValue.style.color = favColor.value;
    const countryValue = document.getElementById("countryValue")
    countryValue.innerHTML = country.value;
    //countryValue.style.color = favColor.value;


}