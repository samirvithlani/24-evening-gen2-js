var students = [
  {
    id: 101,
    firstName: "ravi",
    lastName: "kumar",
    age: 21,
    marks: [23, 24, 25, 26, 24],
  },

  {
    id: 102,
    firstName: "amit",
    lastName: "sharma",
    age: 22,
    marks: [23, 29, 25, 22, 22],
  },

  {
    id: 103,
    firstName: "ajay",
    lastName: "jadeja",
    age: 22,
    marks: [22, 25, 25, 25, 21],
  },
];

//{id:101,fullName:"ravi kumar",age:21,persentage:23}

var studentDetails = students.map((stu) => {
  return {
    id: stu.id,
    fullName: stu.firstName + " " + stu.lastName,
    age: stu.age,
    performance: stu.marks.reduce((sum, m) => sum + m, 0) / stu.marks.length,
  };
});
console.log(studentDetails);



var studentDetailsfilter = studentDetails.filter((stu) => {

    return stu.performance>=24;
})
console.log(studentDetailsfilter);

