//Task 35

let animal : string[] = ["Cat", "Dog", "Rabbit"] 
console.log("Animals:");
for(let animals of animal) {
    console.log(animals)
};

console.log("\n Statement about each animal:")
for(let animals of animal) {
    console.log(`A ${animals} would make a great pet`)
};

console.log("Any of these animals would make a great pet")