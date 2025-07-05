// let name1 = process.argv[2] || "World";
// console.log("Hello " + name1);

import express from 'express';
const app = express();
const port = process.argv[2] || 3000;
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);

})

app.get('/', (req, res) => {
    res.send(`Hello World from PORT ${port}`);
})