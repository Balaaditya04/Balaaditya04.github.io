import http from 'http';
const server = http.createServer((req, res)=>{
    res.end("Whats up..");
})
server.listen(8082, ()=>{
    console.log("Server3 got created");
})