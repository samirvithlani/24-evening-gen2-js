function checkPalidrome(name) {
  //code to check palindrome
  //if palindrome return true or false

  var revstr = "";

  //"madam"
  for (let i = name.length-1; i >= 0; i--) {
    revstr = revstr + name[i];
  }

  if (name == revstr) {
    return true;
  } else {
    return false;
  }
}

var flag  = checkPalidrome("madama"); // madam
console.log(flag); // true

if(checkPalidrome("madam")){
    console.log("Palindrome");
}
else{
    console.log("Not a palindrome");
}


function findIndex(str,char){
    var index=-1;
    //india ,n

    for(let i=0;i<str.length;i++){
        //i == n 
        //n == n
        if(str[i]==char){
            index =i; //1
            break;
        }
    }
    return index;
}

var index = findIndex("india","x");
console.log(index); // 1