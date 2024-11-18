const getData = (event)=>{
    //console.log(event.key);
    //console.log('getData');
    // const txt = document.getElementById('txt').value;
    // console.log(txt);

    const txt = document.getElementById('txt') //<input type="text" id="txt">
    console.log(txt.value);

    const nameValue = document.getElementById('nameValue') //<span id="nameValue"></span>
    nameValue.innerHTML = txt.value;
    
}