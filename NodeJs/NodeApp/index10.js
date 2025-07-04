// import jwt from 'jsonwebtoken';
// const SECRET = 'sometext';
// // const user={
// //     name: 'John',
// //     email: 'john@email.com',
// //     role: "admin",
// // };
// // const token = jwt.sign(user, SECRET, { expiresIn: '1h' });
// // console.log(token)

// const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiSm9obiIsImVtYWlsIjoiam9obkBlbWFpbC5jb20iLCJyb2xlIjoiYWRtaW4iLCJpYXQiOjE3NTE2MDUxMDcsImV4cCI6MTc1MTYwODcwN30.RjugOCh7FXCVNq63UwrBabE6FXb86x5zzX0nOVHGPv4"
// const user = jwt.verify(token, SECRET);
// console.log(user)


import jwt from "jsonwebtoken";
const SECRET = "sometext";
const user = {
  name: "John",
  email: "john@gmail.com",
  role: "admin",
};
const token = jwt.sign(user, SECRET, { expiresIn: "1h" });
console.log(token)

const decoded = jwt.verify(token,SECRET)
console.log(decoded)