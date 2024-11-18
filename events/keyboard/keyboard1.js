const getData = (event)=>{
    //console.log(event.key);
    //console.log('getData');
    // const txt = document.getElementById('txt').value;
    // console.log(txt);

    const txt = document.getElementById('txt') //<input type="text" id="txt">
    console.log(txt.value);

    const nameValue = document.getElementById('nameValue') //<span id="nameValue"></span>
    //nameValue.innerHTML = txt.value;

    if(txt.value.trim().length<=3){
        const nameError = document.getElementById('nameError') //<span id="nameError"></span>
        nameError.innerHTML = 'Name must be at least 3 characters';
        nameValue.innerHTML = '';
        txt.style.outline = '1px solid red';
    }
    else{
        const nameError = document.getElementById('nameError') //<span id="nameError"></span>
        nameError.innerHTML = '';
        nameValue.innerHTML = txt.value;
        txt.style.outline = '1px solid green';
    }

    
}