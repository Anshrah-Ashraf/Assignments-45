//Task 3
var personName = "Anshrah Ashraf";
//in lowercase
console.log("lowercase:", personName.toLowerCase());
//in uppercase
console.log("uppercase:", personName.toUpperCase());
//in titlecase
console.log("titlecase:", personName.replace(/\b\w/g, function (c) { return c.toUpperCase(); }));
