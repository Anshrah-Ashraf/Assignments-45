//Task 15//
let guestArr : string [] = ["Ali", "Haseeb", "Muzammil"];
let canNotAttend : string = "Ali";
console.log(canNotAttend + " ", "can not attend the dinner.");

let newGuestArr : string = "Alina";
guestArr[guestArr.indexOf(canNotAttend)] = newGuestArr;
console.log(guestArr)


guestArr.map((items => console.log(`Dear ${items}, you are invited to the dinner.`)))




//.indexOf value return krti hai, previous cheez ko hata kr nayi cheez uski jagah replace krdeta hai//
//.map me sari cheezein items k form me declare hojati hain//

