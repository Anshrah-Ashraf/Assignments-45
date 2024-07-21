//Task 35
var animal = ["Cat", "Dog", "Rabbit"];
console.log("Animals:");
for (var _i = 0, animal_1 = animal; _i < animal_1.length; _i++) {
    var animals = animal_1[_i];
    console.log(animals);
}
;
console.log("\n Statement about each animal:");
for (var _a = 0, animal_2 = animal; _a < animal_2.length; _a++) {
    var animals = animal_2[_a];
    console.log("A ".concat(animals, " would make a great pet"));
}
;
console.log("Any of these animals would make a great pet");
