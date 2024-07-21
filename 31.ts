//Task 31

let userName : string[] = [];

if(userName.length === 0) {
    console.log("We need to find some users.")
} else {
    for (let names of userName) {
        if (names === "Admin") {
            console.log("Would you like to see an updates?");
        } else {
            console.log("Hi" + " " + userName);
        }
    }
}