// import http from 'http';
// const server = http.createServer((req, res)=>{
//     res.end("Request Received...");
// });

// // const server = http.createServer((req, res) => {

// // });

// server.listen(8080, ()=>{
//     console.log("Server Started");
// });

import http from 'http';
const server = http.createServer((req, res) => {
    res.end("Request Received");
});
server.listen(8089, ()=>{
    console.log("Server2 Started");
});
