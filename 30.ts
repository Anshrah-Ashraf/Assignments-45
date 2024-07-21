//Task 30

let Names : string[] = ["Ali", "Admin", "Alina", "Hamza", "Hoorain"];
if(Names.length === 0) {
    console.log("We need to find some users");
} else {
    for (let username of Names) {
        if(username === "Admin") {
            console.log("Admin, would you like to see an update");
        } else {
            console.log("Hi Users" + " " + username);
        }
    }
};
