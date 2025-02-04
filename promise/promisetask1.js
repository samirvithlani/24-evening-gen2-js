var users = [
  {
    id: 101,
    name: "ram",
    age: 23,
  },
  {
    id: 102,
    name: "kunal",
    age: 24,
  },
  {
    id: 103,
    name: "amit",
    age: 25,
  },
];

const findUser = () => {
  var text = document.getElementById("txt").value;
  console.log("searching user..");
  const output = document.getElementById("output");
  output.innerHTML = "searching..."
  var promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(
        users.find((user) => {
          return user.name == text;
        })
      );
    }, 3000);
  });
  //console.log(promise)
  promise.then((data) => {
    console.log(data);
    const output = document.getElementById("output");
    if (data != undefined) {
      output.innerHTML = "User found..";
    } else {
      output.innerHTML = "User Not found..";
    }
  });
};
