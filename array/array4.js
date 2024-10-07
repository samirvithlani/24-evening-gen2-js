const marks =[10,20,22,23]
console.log(marks)
// var removedElm = marks.pop()
//marks.length = marks.length-1 [correct]
//console.log("removed element..",removedElm)


function removeElm(){
    var x = marks[marks.length-1] //23
    marks.length = marks.length-1
    return x
}

var removedElm = removeElm()
console.log("removed element..",removedElm)


console.log(marks)