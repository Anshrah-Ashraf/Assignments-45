//Task 41, 42 and 43//

let magicians : string[] = ["Robert", "Lorence", "Nobita", "Doremon"]

function show_magicians(magicians:string[]) {
    magicians.forEach(magicians => {
        console.log(magicians)
    })
};
function make_great(magicians:string[]) : string[] {
    const greatMagician:string[] = []
    for(let i= 0; i < magicians.length; i++) {
        greatMagician.push ("The great" + " " + magicians[i])
    }
    return greatMagician;
}
const magiciaans: string[] = ["Robert", "Lorence", "Nobita", "Doremon"];

const orginalMagicians: string[] = magiciaans.slice() //Create a copy off the original array//

const greatMagician: string[] = make_great(orginalMagicians);

console.log("Orginal Magicians:");
show_magicians(orginalMagicians);

console.log("\nGreat Magicians");
show_magicians(greatMagician);