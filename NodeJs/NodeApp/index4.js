import express from "express";

const app = express();

app.listen(8080, () => {
    console.log("Server Started on port 8080");
});

// Root Route with Query Params Example: localhost:8080/?name=Bala
app.get("/", (req, res) => {
    res.send(req.query.name); 
});

// Route with Headers Example: localhost:8080/headers with authorization header
app.get("/headers", (req, res) => {
    res.send(req.headers.authorization);
});

// Static Route Example: localhost:8080/name
app.get("/name", (req, res) => {
    res.send("Static Routing");
});

// Dynamic Route with Name Param: localhost:8080/name/Bala
app.get("/name/:name", (req, res) => {
    res.send(req.params.name);
});

// Dynamic Route with Name & Age Params: localhost:8080/name/Bala/age/20
app.get("/name/:name/age/:age", (req, res) => {
    res.send(req.params.name + req.params.age);
});

// Generic Dynamic Route - Keep this last to avoid overriding specific routes
app.get("/:name", (req, res) => {
    res.send(req.params.name);
});

// POST request: localhost:8080/products (Send JSON body)
app.post("/products", (req, res) => {
    res.send(`Product Received: ${JSON.stringify(req.body)}`);
});

// Delete request: localhost:8080/products/:id
app.delete("/products/:id", (req, res) => {
    res.send(`Product ${req.params.id} deleted`);
});

// PATCH request: localhost:8080/products/1 (Simulating update)
app.patch("/products/:id", (req, res) => {
    res.send("Patch")
});