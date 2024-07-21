//Task 32

let current_users : string[] = ["Ali", "Hamza", "Saad", "Khan", "Urwa"];
let newUserNames : string[] = ["Ali", "Maryam", "Mehtab", "Saad", "Sikandar"]
for(let newUserName of newUserNames) {
    if(current_users.some(user => user.toLowerCase()===newUserName.toLowerCase())) {
        console.log(`Sorry, the username ${newUserName} is available. Please enter a new username.`)
    } else {
        console.log(`The username ${newUserName} is available`)
    }
}