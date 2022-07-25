
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

for (let j=hacker2.length-1; j >= 0 ; j--){
    //let hacker2LowerCase = hacker2.toLocaleLowerCase();
    newHacker2 += hacker2[j];
}
console.log(newHacker1)
console.log(newHacker2)


let hackerCompare = hacker1.localeCompare(hacker2);

if (hackerCompare == -1){
    console.log("The driver's name goes first");
}else if(hackerCompare == 1){
    console.log("Yo, the navigator goes first definitely.");
}else{
    console.log("What?! You both have the same name?");
}

let loremText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer egestas vehicula nisl, vel laoreet ligula luctus vel. Sed a turpis vitae urna rutrum pulvinar ut eget nulla. Sed eu ex vel ligula tempor faucibus sit amet a sem. Duis non suscipit ex. Aenean et ultrices urna. Donec ut lacinia nisl. Fusce pretium, lectus vel varius semper, nunc metus faucibus quam, id mollis orci orci ac eros. Quisque molestie felis id enim sagittis tincidunt. Vestibulum maximus hendrerit finibus. Integer vestibulum commodo dui. Fusce enim eros, luctus a tellus quis, egestas aliquet eros. Vestibulum accumsan mauris elementum, maximus ligula in, aliquam leo. \n 
Curabitur fermentum ut tellus consequat venenatis. Nullam vehicula nisi leo, at condimentum leo rutrum a. Curabitur placerat feugiat arcu, rutrum facilisis arcu consectetur at. Mauris in sem placerat, consequat nibh varius, placerat nunc. Vestibulum posuere nisi a vestibulum aliquet. Praesent accumsan mattis nisi, sit amet maximus tellus euismod eget. Fusce sodales laoreet justo vitae porta. Curabitur scelerisque libero lectus, eu ornare eros pulvinar at. Aliquam sit amet dapibus mi, vitae gravida nisl. Aenean vehicula risus est, ac iaculis justo ultrices eu. Nulla facilisi. Sed eget nunc aliquam, consequat leo id, sodales erat. Duis eleifend lectus ut felis suscipit sagittis. Duis porta condimentum nunc eget gravida. \n
Donec vitae sem eu enim laoreet lobortis luctus nec elit. Vivamus aliquam accumsan neque, eu maximus massa lobortis at. Curabitur pharetra risus et auctor ornare. Cras neque dolor, tincidunt vel mollis sed, commodo sit amet turpis. Aliquam in interdum dolor. Mauris viverra sem sed purus commodo vestibulum. Quisque luctus ornare nibh et pellentesque. Nulla nec iaculis quam. Donec eget odio libero. Phasellus eget placerat tellus, sit amet imperdiet massa. Curabitur risus erat, interdum eget consequat sit amet, varius vel nibh. Nam at nisi euismod, ultricies felis vel, cursus ipsum. Aliquam purus turpis, blandit non nisi non, aliquam pharetra diam. Sed molestie dictum diam, et pretium leo tristique quis. Integer euismod pharetra ligula id consequat.`
let loremArray = loremText.split(" ");
let loremArray2 = loremText.split("et");


console.log(loremArray.length);
console.log(loremArray2.length -1);

