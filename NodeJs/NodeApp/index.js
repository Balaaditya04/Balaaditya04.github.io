import express from "express"

const app = express();

app.listen(8080, ()=>{
    console.log("Server Started");
});

// app.get("/", (req, res)=>{
//     res.send("Hello World")
// })

// app.get("/products", (req, res) => {
//     res.json({id:1, name: "Product-1", price: 500});
// });

// app.get("/ab*cd", (req, res)=>{
//     res.send("Hello")
// })

app.get("/:name", (req, res)=>{
    res.send("Good Morning")
})

app.get("/name", (req, res)=>{
    res.send("Good Morning")
})