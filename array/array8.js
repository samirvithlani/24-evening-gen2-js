var data = [1221,234,789,23,9,876]

console.log(data)

const sortByValue = (a,b)=>{
    return a -b;
}
//data.sort(sortByValue)
data.sort((a,b)=>a-b)
console.log(data)



var users = ["amit","raj","parth","Kunal","ajay","akshyraj","hr"]
console.log(users)
//users.sort()
users.sort((a,b)=>a.length - b.length)
console.log(users)


var data2 = [false,100,"raj",200,"amit",true,300,"kunal",400,"bparth",{"name":"ajay"}]
console.log(data2)

data2.sort()
console.log(data2)