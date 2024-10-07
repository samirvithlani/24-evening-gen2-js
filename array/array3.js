var students = ["amit","kunal","seeta"]
console.log(students)

//students[3]="geeta"
//students[students.length]="geeta" [correct]
//students.push("geeta")

function addData(elm){
    students[students.length]=elm
    return students.length
}

var x = addData("geeta")
console.log("new len..",x)

console.log(students)