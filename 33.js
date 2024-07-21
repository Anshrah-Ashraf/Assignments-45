//Task 33
var number = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (var _i = 0, number_1 = number; _i < number_1.length; _i++) {
    var numbers = number_1[_i];
    var ordinalEnding = void 0;
    if (numbers == 1) {
        ordinalEnding = "st";
    }
    else if (numbers == 2) {
        ordinalEnding = "st";
    }
    else if (numbers == 3) {
        ordinalEnding = "rd";
    }
    else {
        ordinalEnding = "th";
    }
    console.log("".concat(numbers).concat(ordinalEnding));
}
