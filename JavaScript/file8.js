//array methods

//ForEach


// points.foreach(value, index)=>{
//     console.log(value);
// })
// const score=[2,5,4,6,3,1];
// points.forEach((value, index) => {
//     // console.log(c[b]);
//     console.log(a);    
// });



//Map
// const points = [2, 5, 4, 6, 3, 1];
// const newArr = points.map((value, index) => {return value + 5;});
// console.log(newArr);

//Filter
// const points = [2,5,4,6,3,1];
// const newArr=points.filter((value, index) => value>2);
// console.log(newArr);

//Find
// const points = [2,5,4,6,3,1];
// const newArr=points.find((value, index) => value===2);
// console.log(newArr);

// const points = [2,5,4,6,3,1];
// const result =points.find((value, index) => value===2);
// console.log(result);

//Reduce
const points = [2,5,4,6,3,1];
const newArr=points.reduce((sum, value) => {
return sum + value;
},0);
console.log(newArr);



    

