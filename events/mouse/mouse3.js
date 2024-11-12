const colors = [
    "#FF5733", // Red-Orange
    "#33FF57", // Green
    "#3357FF", // Blue
    "#FF33A8", // Pink
    "#33FFF5", // Cyan
    "#F5FF33", // Yellow
    "#FF8C33", // Dark Orange
    "#8C33FF", // Purple
    "#FF3333", // Red
    "#33FF8C", // Mint Green
    "#FF5733", // Coral
    "#FFC300", // Golden Yellow
    "#DAF7A6", // Light Green
    "#FFB6C1", // Light Pink
    "#800080", // Dark Purple
    "#00FF00", // Lime
    "#0000FF", // Pure Blue
    "#FF69B4", // Hot Pink
    "#8B4513", // Saddle Brown
    "#A52A2A"  // Brown
  ];
 
  

const chngaeColor = () => {


//how to generate random number

//const randomNo = Math.floor(Math.random() *11)
const randomIndex = Math.floor(Math.random() * colors.length)
//console.log(randomNo)
console.log(randomIndex)
console.log(colors[randomIndex])

const mydiv = document.getElementById("mydiv")
mydiv.style.backgroundColor = colors[randomIndex]



}

