import express from 'express'
const app = express()
app.listen(8081, () => {
  console.log('Server Started on port 8081')
})
app.use(express.static('public'))


//local
app.get("/products", (req, res) => {
  res.send("List of Products");
})