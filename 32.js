//Task 32
var current_users = ["Ali", "Hamza", "Saad", "Khan", "Urwa"];
var newUserName = ["Ali", "Maryam", "Mehtab", "Saad", "Sikandar"];
var _loop_1 = function (newUserName_1) {
    if (current_users.some(function (user) { return user.toLowerCase() === newUserName_1.toLowerCase(); })) {
        console.log("Sorry, the username ".concat(newUserName_1, " is available. Please enter a new username."));
    }
    else {
        console.log("The username ".concat(newUserName_1, " is available"));
    }
};
for (var _i = 0, newUserNames_1 = newUserNames; _i < newUserNames_1.length; _i++) {
    var newUserName_1 = newUserNames_1[_i];
    _loop_1(newUserName_1);
}
