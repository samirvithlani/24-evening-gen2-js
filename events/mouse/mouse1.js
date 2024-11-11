const buttonClick = () => {
    console.log('Button clicked');
    //console.log(document.getElementById("txt"))//<h1 id="txt">Hello</h1>
    //console.log(document.getElementById("txt").innerHTML)//Hello
    // const txt = document.getElementById("txt").innerHTML; //Hello
    // console.log(txt);
    const txt = document.getElementById("txt"); //<h1 id="txt">Hello</h1>
    console.log(txt.innerHTML);//Hello
    txt.innerHTML = "Hello World";
    txt.style.color = "red";

}