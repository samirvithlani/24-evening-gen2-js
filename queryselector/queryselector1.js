const title = document.getElementById("title")
console.log("id...",title.innerHTML)

const content = document.getElementsByClassName("content")[0]
console.log("class....",content.innerHTML)

const ptag = document.getElementsByTagName("p")[0]
console.log("tag,...",ptag.innerHTML)

const name1 = document.getElementsByName("name")[0]
console.log("name...",name1.innerHTML)


const title1 = document.querySelector("#title")
console.log("by id....",title1.innerHTML)

const content1 = document.querySelector('.content')
console.log(content1.innerHTML)

const ptag1 = document.querySelector("p")
console.log(ptag1.innerHTML)

const name2 = document.querySelector("[name=name]")
console.log(name2.innerHTML)