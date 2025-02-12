var employees = [
  {
    id: 101,
    name: "ram",
    age: 25,
    salary: 15000,
    attandance: 22,
  },
  {
    id: 102,
    name: "shyam",
    age: 24,
    salary: 25000,
    attandance: 23,
  },
  {
    id: 103,
    name: "amit",
    age: 26,
    salary: 45000,
    attandance: 20,
  },
];

window.addEventListener("DOMContentLoaded", () => {
  for (let i = 0; i < employees.length; i++) {
    createRow(employees[i]);
  }
});

const createRow = (employee) => {
  const tbody = document.getElementById("tbody");
  const tr = document.createElement("tr"); //<tr>

  const idTD = document.createElement("td");
  idTD.innerHTML = employee.id;

  const nameTd = document.createElement("td");
  nameTd.innerHTML = employee.name;

  const ageTd = document.createElement("td");
  ageTd.innerHTML = employee.age;

  const salaryTd = document.createElement("td");
  salaryTd.innerHTML = employee.salary;

  const attandanceTd = document.createElement("td");
  attandanceTd.innerHTML = employee.attandance;

  if (employee.age < 24) {
    ageTd.style.color = "green";
  }
  if (employee.salary < 30000) {
    salaryTd.style.backgroundColor = "red";
  }

  const actionTD = document.createElement("td");
  //detail button
  const detailButton = document.createElement("button");
  detailButton.innerHTML = "Detail";
  detailButton.className = "btn btn-info";
  detailButton.addEventListener("click", () => {
    alert(employee.name);
  });

  const deleteButton = document.createElement("button");
  deleteButton.innerHTML = "Delete";
  deleteButton.className = "btn btn-danger";
  deleteButton.style.marginLeft = "10px";

  deleteButton.addEventListener("click", () => {
    tr.remove();
  });

  actionTD.appendChild(detailButton);
  actionTD.appendChild(deleteButton);

  tr.appendChild(idTD);
  tr.appendChild(nameTd);
  tr.appendChild(ageTd);
  tr.appendChild(salaryTd);
  tr.appendChild(attandanceTd);
  tr.appendChild(actionTD);

  tbody.appendChild(tr);
};

const sortData = () => {
  const tbody = document.getElementById("tbody");
  console.log(tbody);
  tbody.innerHTML = "";

  employees = employees.sort((a, b) => a.age - b.age);
  for (let i = 0; i < employees.length; i++) {
    createRow(employees[i]);
  }
};

const searchByName = ()=>{
  const searchTxt = document.getElementById("searchTxt")
  //console.log(searchTxt.value)
  const tbody  = document.getElementById("tbody")
  tbody.innerHTML = ""
  //to filter data by name
  employees = employees.filter((emp)=>{
    return emp.name.includes(searchTxt.value)
  })
  //to generate rows
  for (let i = 0; i < employees.length; i++) {
    createRow(employees[i]);
  }
}
