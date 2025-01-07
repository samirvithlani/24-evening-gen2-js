var employees = [
    {
        id:101,
        name:"ram",
        age:23,
        salary:15000,
        attandance:22
    },
    {
        id:102,
        name:"shyam",
        age:24,
        salary:25000,
        attandance:23
    },
    {
        id:103,
        name:"amit",
        age:26,
        salary:45000,
        attandance:20
    }
]

const tbody  = document.getElementById("tbody")
for(let i=0;i<employees.length;i++){


    const tr = document.createElement("tr") //<tr>

    const idTD = document.createElement("td")
    idTD.innerHTML = employees[i].id

    const nameTd = document.createElement("td")
    nameTd.innerHTML = employees[i].name

    const ageTd = document.createElement("td")
    ageTd.innerHTML = employees[i].age

    const salaryTd = document.createElement("td")
    salaryTd.innerHTML = employees[i].salary

    const attandanceTd= document.createElement("td")
    attandanceTd.innerHTML = employees[i].attandance



    tr.appendChild(idTD)
    tr.appendChild(nameTd)
    tr.appendChild(ageTd)
    tr.appendChild(salaryTd)
    tr.appendChild(attandanceTd)

    tbody.appendChild(tr)

}