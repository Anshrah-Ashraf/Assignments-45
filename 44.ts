//Task 44

function makeSandwiches(...items: string[]): void {
    console.log("Sandwich Summary");
    if (items.length === 0) {
        console.log("You order a empty sandwich")
    } else {
        console.log("You ordered a sandwich with the following items:");
    }items.forEach((items) => {
        console.log("-" + items);
    });
}
makeSandwiches();
makeSandwiches("Ham", "Turkey", "Cheese");
makeSandwiches("Swiss cheese", "Tomato");
makeSandwiches("Peanut Butter", "Jelly");