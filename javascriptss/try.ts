var student = {
    name: "dependra",
    age: 22
};

console.log(student.name); // Output: dependra
console.log(student.age);  // Output: 22

for(var item in student){
    console.log(item);
    console.log(student[item]);
}