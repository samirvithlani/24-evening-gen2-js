const root = document.getElementById("root")//<div>

const titleH1 = document.createElement("h1") //<h1></h1>
titleH1.innerHTML = "India"

root.appendChild(titleH1) //<div> <h1></h1></div>


var users = ["ram","shyam","seeta","geeta","hari","krishna","ok","yes"]

for(let i=0;i<users.length;i++){

    //h2
    var userH2 = document.createElement("h2") //<h2><h2><h2><h2>
    userH2.innerHTML = users[i] //<h2>ram</h2> <h2>shyam<h2>
    root.appendChild(userH2) //<div><h2>...</h2>....</div>
}