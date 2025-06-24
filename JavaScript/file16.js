//promise 
// const f1=() => {
//     setTimeout(() => {
//     return 5;
//     },1000);
// };
// const f2=(x)=>{
//     console.log(x+6);
// };
// const n=f1()
// f2(n);



// const f1=() => {
//     return new Promise((resolve, reject) => {
//             resolve(5);
//     });
// };
// const f2=(x)=>{
//     console.log(x+6);
// };
// f1().then((n) => f2(n));


// const f1=(a) => {
//     return new Promise((resolve, reject) => {
//             if(a < 0) reject("Negative number not allowed");{
//                 else resolve(5);
//                 reject("Error occurred");
//             }
//     });
// };
// const f2=(x)=>{
//     console.log(x+6);
// };
// // f1().then((n) => f2(n));
// f1()
//     .then((n) => f2(n))
//     .catch((error) => console.error(error));

// const f1 = (a) => {
//     return new Promise((resolve, reject) => {
//         if (a < 0) {
//             reject("Negative number not allowed");
//         } else {
//             resolve(5);
//         }
//     });
// };

// const f2 = (x) => {
//     console.log(x + 6);
// };

// f1(3)   
//     .then((n) => f2(n))
//     .catch((error) => console.error(error));


// fetch("https://jsonplaceholder.typicode.com/users1")
//     .then((res) => res.json())
//     .then((data) => {
//         data.forEach((value) =>{
//             console.log(value.name);
//             console.log(value.email);
//         });
//     })
//     .catch((err) => console.log("something went wrong"));

const fetchData = async () => {
        const res = await fetch("https://jsonplaceholder.typicode.com/users")
        const data = await res.json();
        data.forEach((value) => {
            console.log(value.name);
        });
};
fetchData();

