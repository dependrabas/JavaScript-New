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

