var cars = [
    {
        id:1011,
        name:"audi",
        price:5000000,
        model:"A8",
        color:"black",
        fuelType:"petrol",
        engineType:"V8",
    },
    {
        id:1012,
        name:"bmw",
        price:8000000,
        model:"X5",
        color:"white",
        fuelType:"diesel",
        engineType:"V12",
    },
    {
        id:1013,
        name:"mercedes",
        price:6000000,
        model:"E class",
        color:"black",
        fuelType:"petrol",
        engineType:"V8",
    },
    {
        id:1014,
        name:"volkswagen",
        price:4000000,
        model:"passat",
        color:"blue",
        fuelType:"diesel",
        engineType:"V6",
    },
    {
        id:1015,
        name:"toyota",
        price:3000000,
        model:"corolla",
        color:"red",
        fuelType:"petrol",
        engineType:"V4",
    }
]



var petrolCars = cars.filter((car)=>{
    return car.fuelType === "petrol" && car.engineType === "V4";
})
console.log(petrolCars);
