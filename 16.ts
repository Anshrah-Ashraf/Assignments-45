//Task 16//
let guestArr : string[] = ["Alina", "Haseeb", "Muzammil"];

let canNotAttend : string = "Haseeb"

let newGuest : string = "Alishba"

guestArr[guestArr.indexOf(canNotAttend)] = newGuest;
console.log(guestArr);

guestArr.map((items => console.log(`Dear ${items}, I have found a bigger dinner table, so I am inviting more people.`)))

//task 16 part 2//
let guestNewBegin : string = "Moiz";
guestArr.unshift(guestNewBegin);
//console.log(guestArr)

//task 16 part 3// 
let guestNewMiddle : string = "Zain";  
let MiddleIndex = guestArr.length/2
guestArr.splice(MiddleIndex,0,guestNewMiddle)   //Splice: Elements ko array se removve krta hai and if neccessary tw naya element bhi add krta hai
//console.log(guestArr)

//task 16 part 4// "Manahil";
guestArr.push("Manahil");
let guestNewLast: string =
//console.log(guestArr)

//Part 5//
guestArr.map((items => console.log(`Dear ${items}, you are invited to the dinner.`)))



//.unshift name ko starting of the array me shift krdeta hai