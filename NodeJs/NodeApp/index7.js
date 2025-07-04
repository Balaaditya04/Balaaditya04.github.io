import express from "express";
const app = express();

app.listen(8081, () => {
  console.log("Server Started on port 8081");
});

app.use(express.json());

let products = [];

// POST - Create Product
app.post("/", (req, res) => {
  try {
    const { id, name, price } = req.body;
    const found = products.find((product) => product.id === id);

    if (found) return res.status(409).send("Product Already Exists");

    products.push({ id, name, price });
    res.status(201).json({ message: "Product Created", product: { id, name, price } });
  } catch (err) {
    res.status(400).json({ message: "Something went wrong" });
  }
});

// GET - List Products
app.get("/", (req, res) => {
  res.json(products);
});

// DELETE - Remove Product by ID
app.delete("/:id", (req, res) => {
  const { id } = req.params;
  const index = products.findIndex(product => product.id == id);

  if (index === -1) {
    return res.status(404).json({ message: "Product not found" });
  }

  products.splice(index, 1);
  res.json({ message: "Product Deleted" });
});

// PATCH - Update Product by ID
app.patch("/:id", (req, res) => {
  const { id } = req.params;
  const { name, price } = req.body;
  const product = products.find(p => p.id == id);

  if (!product) {
    return res.status(404).json({ message: "Product not found" });
  }

  if (name) product.name = name;
  if (price) product.price = price;

  res.json({ message: "Product Updated", product });
});
