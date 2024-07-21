//Task 44
function makeSandwiches() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log("Sandwich Summary");
    if (items.length === 0) {
        console.log("You order a empty sandwich");
    }
    else {
        console.log("You ordered a sandwich with the following items:");
    }
    items.forEach(function (items) {
        console.log("-" + items);
    });
}
makeSandwiches();
makeSandwiches("Ham", "Turkey", "Cheese");
makeSandwiches("Swiss cheese", "Tomato");
makeSandwiches("Peanut Butter", "Jelly");
