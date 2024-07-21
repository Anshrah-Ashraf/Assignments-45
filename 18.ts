//Task 18

//Store the locations in a array. 
let places : string[] = ["Thailand", "Germany", "Alaska", "Paris", "Boston"];

//Store the locations in a array. 
console.log("Original Order:", places);

//Print your array in alphabetical order without modifying the actual list.
console.log("Alphabetical Order:", [...places].sort());

//Show that your array is still in its original order by printing it.
console.log("Original Order after sorting:", places);

//Print your array in reverse alphabetical order without changing the order of the original list.
console.log("Reverse alphabetical order:", [...places].sort().reverse())

//Show that your array is still in its original order by printing it again after reverse.
console.log("Original Order after reverse:", places);

//Reverse the order of your list. Print the array to show that its order has changed.
places.reverse();
console.log("Reversed order:", places);

//Reverse the order of your list again. Print the list to show it’s back to its original order.
places.reverse();
console.log("Reverse again:", places)

//Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
places.sort()
console.log("Sort it to store in an alphabetical order:", places);

//Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
places.sort((a, b) =>  b.localeCompare(a))
console.log("Stored in reverse alphabetical order:", places);

//Sort sorts an array in place. This method changes the array and returns a reference to the same array.
//Determines whether two strings are equivalent in the current or specified locale.