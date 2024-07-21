//Task 36
function makeShirt(size, message) {
    if (size === void 0) { size = "Large"; }
    if (message === void 0) { message = "I love typescript"; }
    console.log("You have ordered T-shirt size ".concat(size, " and message ").concat(message, "."));
}
makeShirt();
makeShirt("Medium");
makeShirt("small", "Typescript is fun");
