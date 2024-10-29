var companies = [
  {
    name: "Google",
    employees: [
      {
        name: "sundar pichai",
        age: 47,
        salary: 10000000,
        post: "CEO",
      },
      {
        name: "larry page",
        age: 47,
        salary: 20000000,
        post: "founder",
      },
      {
        name: "sergey brin",
        age: 47,
        salary: 20000000,
        post: "founder",
      }
    ],
  },
  {
    name: "Microsoft",
    employees: [
      {
        name: "satya nadella",
        age: 52,
        salary: 20000000,
        post: "CEO",
      },
      {
        name: "bill gates",
        age: 65,
        salary: 20000000,
        post: "founder",
      },
    ],
  },
  {
    name: "Facebook",
    employees: [
      {
        name: "mark zuckerberg",
        age: 36,
        salary: 30000000,
        post: "CEO",
      },
      {
        name: "eduardo saverin",
        age: 38,
        salary: 30000000,
        post: "founder",
      },
    ],
  },
];

var google = companies.find((comp) => comp.name == "Google");
console.log(google);

var fbEmployees = companies.find((comp) => comp.name == "Facebook").employees;
console.log(fbEmployees);

var microsofFounders = companies
  .find((comp) => comp.name == "Microsoft")
  .employees.filter((emp) => emp.post == "founder");

console.log(microsofFounders);

var googleEmppswithsal = companies.find((comp)=>comp.name=="Google").
employees.filter((emp)=>emp.salary>10000000)
console.log(googleEmppswithsal)