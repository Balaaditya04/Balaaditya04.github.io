// function greet(){
//     console.log("Hello, World!");
// }
// greet();

//---------------------------------------->
// const greet=()=>{
//     console.log("This is Arrow Fnc");
// };
// greet()

//----------------------------------------->

// const add = (a,b)=>{
//     return a+b;
// };
// const result =add(4,5);
// console.log(result);

const add = (...args)=>{ // ...spread operator
    console.log(args)
};
add(4,5,6,7,8,9,10);

