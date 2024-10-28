var marks = [10,12,13,14]

// var total = marks.reduce((sum,mark)=>{
//     return sum + mark;
// },0)

var total = marks.reduce((x,mark)=> x + mark,0)
console.log(total); // 49


var users = ["ram","shyam","seeta","hari","geeta"];

var data = users.reduce((x,u)=>x+","+u,"");
console.log(data); // ramshyamseetaharigeeta
