//Task 16//
var guestArr = ["Alina", "Haseeb", "Muzammil"];
var canNotAttend = "Haseeb";
var newGuest = "Alishba";
guestArr[guestArr.indexOf(canNotAttend)] = newGuest;
//console.log(guestArr);
//guestArr.map((items => console.log(`Dear ${items}, I have found a bigger dinner table, so I am inviting more people.`)))
//task 16 part 2//
var guestNewBegin = "Moiz";
guestArr.unshift(guestNewBegin);
//console.log(guestArr)
//task 16 part 3//
var guestNewMiddle = "Zain";
var MiddleIndex = guestArr.length / 2;
guestArr.splice(MiddleIndex, 0, guestNewMiddle);
//console.log(guestArr)
//task 16 part 4//
var guestNewLast = "Manahil";
guestArr.push("Manahil");
//console.log(guestArr)
//Part 5//
guestArr.map((function (items) { return console.log("Dear ".concat(items, ", you are invited to the dinner.")); }));
//.unshift name ko starting of the array me shift krdeta hai
