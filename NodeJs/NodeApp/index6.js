import express from "express";
const app = express();
app.listen(8081, () => {
    console.log("Server Started on port 8081");
});

app.use(express.json());

app.post("/", (req,res) => {
    // res.send(req.body ); // Echo the request body back to the client
});