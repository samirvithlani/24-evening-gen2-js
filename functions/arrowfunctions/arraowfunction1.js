// const findMax= (a,b)=>{
//     return a >b ?a :b
// }
const findMax = (a,b)=>a>b?a:b

var max = findMax(10,20);
console.log(max);

const ifSpace = (str)=>str.includes(" ")? true:false
console.log(ifSpace("hello world"));


const isValid = (str)=>{
    //str = "  hello  ";

    if(str.trim().length>=3 && str.trim().length<=10){
        return true;
    }
    return false;

}

const checkStr = (data) => isValid(data) ? "valid" : "invalid";


console.log(checkStr("  hii"));
