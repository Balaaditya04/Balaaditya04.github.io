// import express from 'express';
import bcrypt from 'bcrypt';
// const app=express()
// app.listen(8081, () => {
//   console.log('Server Started on port 8081');
// });
const check = await bcrypt.compare("pass12345", "$2b$10$e0N1Z5z5Q8f3j1F7y9a5uO4k5d3h5l6m7n8o9p0q1r2s3t4u5v6w7x");
// const pwd = "pass12345";
// const hashedPwd = await bcrypt.hash(pwd,10);
// console.log(hashedPwd);
console.log(check); // true or false based on the comparison

