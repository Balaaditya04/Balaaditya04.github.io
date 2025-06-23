//stringify
// const student={
//     name: "John Doe",
//     age: 20,
// }
// console.log(JSON.stringify(student));


//parse
const student = '{"name": "John Doe", "age": 20}';
const newStudent= JSON.parse(student);
console.log(newStudent);
console.log(newStudent.name);