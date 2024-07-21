//Task 38

function describeCity(city: string, country: string = "Japan"): void {   //Void represents the absence of any type//
    console.log(`${city} is in ${country}`);                             //Template literals = ${} => expressions ko string me define kr skte hain
}
describeCity("Karachi", "Pakistan");
describeCity("Kabul", "Afgahnistan");
describeCity("Tokyo");