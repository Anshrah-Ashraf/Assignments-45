//Task 31
var userName = [];
if (userName.length === 0) {
    console.log("We need to find some users.");
}
else {
    for (var _i = 0, userName_1 = userName; _i < userName_1.length; _i++) {
        var names = userName_1[_i];
        if (names === "Admin") {
            console.log("Would you like to see an updates?");
        }
        else {
            console.log("Hi" + " " + userName);
        }
    }
}
