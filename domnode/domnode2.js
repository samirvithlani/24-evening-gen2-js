const root = document.querySelector("#root"); //<div>

const ballDiv = document.createElement("div");
ballDiv.style.height = "300px";
ballDiv.style.width = "300px";
ballDiv.style.borderRadius = "50%";
ballDiv.style.backgroundColor = "green";

ballDiv.addEventListener("mouseenter", () => {
  ballDiv.style.height = "150px";
  ballDiv.style.width = "150px";
});

root.appendChild(ballDiv);
