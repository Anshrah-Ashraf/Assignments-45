//Task 45//
function createCar(manufacturer, model) {
    var args = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        args[_i - 2] = arguments[_i];
    }
    var car = { manufacturer: manufacturer, model: model };
    args.forEach(function (arg) {
        var _a = Object.entries(arg)[0], key = _a[0], value = _a[1];
        car[key] = value;
    });
    return car;
}
//Example usage
var car = createCar("Toyota", "Honda", { color: "black", year: 2022 });
var car1 = createCar("Suzuki", "Revo", { color: "blue", year: 2022 });
console.log(car, "\n", car1);
