//Task 33

let number : Number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9]
for(let numbers of number) {
    let ordinalEnding;
    if(numbers == 1){
        ordinalEnding = "st";
    } else if(numbers == 2) {
        ordinalEnding = "st";
    } else if(numbers == 3) {
        ordinalEnding = "rd";
    } else {
        ordinalEnding = "th"
    }
    console.log(`${numbers}${ordinalEnding}`)
}