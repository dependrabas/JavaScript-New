var array1 = [1, 2, 3, 4, 5];
var array2 = [6, 7, 8, 9, 10];
var array3 = array1.concat(array2);
console.log(array3);

var newarr = array1.push(6);
console.log(array1);

var newarr2 = array2.pop();
console.log(array2);

var myarr = array2.shift();
console.log(array2);
var myarr = array2.unshift();
console.log(array2);

console.log("seeing slice ");
array1.slice(1, 3);
console.log(array1);

console.log("seeing splice ");
array1.splice(1, 3);
console.log(array1);



console.log("foreach loop");
let fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits.toString());

fruits.forEach(function(intem,index){
    console.log(index,intem);
})

// let numbers= [1,2,3,4,5];
// let double = numbers.map(x=>x*){
//     console.log(double);
// }

let numbers = [1, 2, 3];
let doubled = numbers.map(x => x * 2);
console.log(doubled); // Output: [2, 4, 6]

var myobj = {
    name: "dependra",
    age: 22,
    city:"THimphu"
}
console.log(myobj.name);
console.log(myobj.city);
console.log(myobj.age);
console.log(myobj["name"]);
console.log(myobj["age"]);
console.log(myobj["city"]);


console.log("seeing insert");
myobj.name = "Raj";
console.log(myobj.name);


console.log("seeing delete");

delete myobj.name;
console.log(myobj.name);

console.log("Hello");

const address = {
    street: 'main',
    numbers: 100,
    apartment: {
        floor: 3, // Changed "Floor" to "floor" to follow camelCase convention
        numbers: 100
    }
};

console.log(address.apartment.floor); // Accessing the 'floor' property of the 'apartment' object7

let myao={
country: 'Bhutan',
home: 'tala',
games: 'football'
}

console.log(myao.country);
console.log(myao.home);
console.log(myao.games);


function addthree(num1,num2,num3){
    return (num1+num2+num3);
}

let c = addthree(2,3,5);
console.log(c);

var cos=10;
console.log(cos);
var cos =15;
console.log(cos);

var nama= {
    name: 'depe'
}

console.log(nama.name);



const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Enter your Age: ', (answer) => {
    let myAge = parseInt(answer, 10);

    switch(myAge){
        case 17:
            console.log("I am 17 years old");
            break;
        case 18:
            console.log("I am 18 years old");
            break;
        case 19:
            console.log("I am 19 years old");
            break;
        case 20:
            console.log("I am 20 years old");
            break;
        case 21:
            console.log("I am 21 years old");
            break;
        default:
            console.log("I am not 17 years old");
    }

    rl.close();
});






// let num = prompt("Enter a number: ");

// num = numbers(prompt("Enter a number: "));
// console.log(num);

for(let i=1;i<=20;i++){
    if(i%2==0){
        console.log(i);
    } else {
        console.log("I am not a number");
    }
        
    }

    let obj={
        depen:99,
        raj:100,
        tashi:101,
        tshering:102
    }
    for(let a in obj){
        console.log("Marks of"+ a + "is "+ obj[a]);
    }

    let n = 30;

    while(n<=40){
        console.log(n);
        n++;
    }   

    function b(){
        var myVar;
        console.log(myVar);
    }
    function a(){
        var myVar=2;
        console.log(myVar);
        b();
    }

    var myVar = 1;
    console.log(myVar);
    a();

    let 