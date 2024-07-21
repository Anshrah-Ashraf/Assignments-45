//Task 45//
interface Car {
    manufacturer: string;
    model: string;
    [key: string]: any;
}
function createCar(manufacturer: string, model: string, ...args: { [key:string]: any}[]): Car {
    const car: Car = { manufacturer, model };
    args.forEach(arg => {
        const [key,value] = Object.entries(arg)[0];
        car[key] = value;
    });
    return car;
}

//Example usage
const car = createCar("Toyota", "Honda", {color: "black", year: 2022});
const car1 = createCar("Suzuki", "Revo", {color: "blue", year: 2022});
console.log(car, "\n", car1)