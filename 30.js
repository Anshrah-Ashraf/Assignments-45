//Task 30
var Names = ["Ali", "Admin", "Alina", "Hamza", "Hoorain"];
if (Names.length === 0) {
    console.log("We need to find some users");
}
else {
    for (var _i = 0, Names_1 = Names; _i < Names_1.length; _i++) {
        var username = Names_1[_i];
        if (username === "Admin") {
            console.log("Admin, would you like to see an update");
        }
        else {
            console.log("Hi Users" + " " + username);
        }
    }
}
;
