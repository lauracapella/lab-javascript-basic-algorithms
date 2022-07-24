
console.log("I'm ready!");
// Iteration 1: Names and Input

let hacker1 = "Laura";

console.log(`The driver's name is ${hacker1}`);

let hacker2 = "David"

console.log(`The navigator's name is ${hacker2}`)

// Iteration 2: Conditionals

let countNames1 = hacker1.length;
let countNames2 = hacker2.length;

if ( countNames1 > countNames2){
    console.log(`The driver has the longest name, it has ${countNames1} characters.`)
} else if(countNames1 > countNames2){
    console.log(`It seems that the navigator has the longest name, it has ${countNames2} characters.`)
}else{
    console.log(`Wow, you both have equally long names, ${countNames1} characters!`)
}

// Iteration 3: Loops
let newHacker1 = "";
let newHacker2 = "";

for (let i=0; i < hacker1.length; i++){
    let hacker1UpperCase = hacker1.toUpperCase();
    newHacker1 += hacker1UpperCase[i] + " ";
}

for (let j=5; j <= 5 && j>=0; j--){
    //let hacker2LowerCase = hacker2.toLocaleLowerCase();
    newHacker2 += hacker2[j];
}
//console.log(newHacker1)

console.log(newHacker2[j])

