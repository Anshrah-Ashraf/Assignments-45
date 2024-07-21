//Task 15//
var guestArr = ["Ali", "Haseeb", "Muzammil"];
var canNotAttend = "Ali";
console.log(canNotAttend + " ", "can not attend the dinner.");
var newGuestArr = "Alina";
guestArr[guestArr.indexOf(canNotAttend)] = newGuestArr;
console.log(guestArr);
guestArr.map((function (items) { return console.log("Dear ".concat(items, ", you are invited to the dinner.")); }));
//.indexOf value return krti hai, previous cheez ko hata kr nayi cheez uski jagah replace krdeta hai//
//.map me sari cheezein items k form me declare hojati hain//
