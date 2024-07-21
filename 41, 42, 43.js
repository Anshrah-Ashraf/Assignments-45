//Task 41, 42 and 43//
var magicians = ["Robert", "Lorence", "Nobita", "Doremon"];
function show_magicians(magicians) {
    magicians.forEach(function (magicians) {
        console.log(magicians);
    });
}
;
function make_great(magicians) {
    var greatMagician = [];
    for (var i = 0; i < magicians.length; i++) {
        greatMagician.push("The great" + " " + magicians[i]);
    }
    return greatMagician;
}
var magiciaans = ["Robert", "Lorence", "Nobita", "Doremon"];
var orginalMagicians = magiciaans.slice(); //Create a copy off the original array//
var greatMagician = make_great(orginalMagicians);
console.log("Orginal Magicians:");
show_magicians(orginalMagicians);
console.log("\nGreat Magicians");
show_magicians(greatMagician);
