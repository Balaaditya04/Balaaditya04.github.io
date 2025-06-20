//objects

const student={
    name:"Aditya", //name is key and Aditya is value
    age:21,
};
console.log(student);
console.log(student.name);
student.city='Jalandhar'
console.log(student)
console.log(student['age']);
delete student.city;
console.log(student);
const keys=Object.keys(student);
console.log(keys)
const values=Object.values(student);
console.log(values)