//Task 17//
var guestArr = ["Moiz", "Alina", "Zain", "Alishba", "Muzammil", "Manahil"];
console.log("Due to limited space only 2 people can be invited to the dinner.");
while (guestArr.length > 2) {
    var removedGuests = guestArr.pop();
    console.log("Sorry ".concat(removedGuests, ", you are no longer invited ot the dinner."));
}
guestArr.forEach((function (guestArr) { return console.log("Dear ".concat(guestArr, ", you are still invited to the dinner.")); }));
//Remove the last two names from your list, so you have an empty list.
guestArr.pop();
guestArr.pop();
//Print your list to make sure you actually have an empty list at the end of your program.
console.log("Final guests list:", guestArr);
//.forEach specified action perform krta hai on an element of an array//
