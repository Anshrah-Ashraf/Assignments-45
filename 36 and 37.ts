//Task 36

function makeShirt(size: string = "Large", message: string = "I love typescript"): void{
    console.log(`You have ordered T-shirt size ${size} and message ${message}.`)
}
makeShirt();
makeShirt("Medium");
makeShirt("small", "Typescript is fun");