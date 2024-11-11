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


const buttonDoubleClick = () => {
    //alert('Button double clicked');
    const link = document.getElementById("link");
    console.log(link);//<a id="link" href="https://www.google.com">Google</a>
    console.log(link.href);//https://www.google.com


    //change link

    link.href = "https://www.hotstar.com";
    link.innerHTML = "Hotstar";


}