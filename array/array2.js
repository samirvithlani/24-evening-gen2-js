var marks = [21,22,23,19,24,21]

console.log(marks)
var x = marks.unshift(22)
console.log("new len..",x)
console.log(marks)

var removedElm = marks.shift()
console.log("removed element..",removedElm)
console.log(marks)