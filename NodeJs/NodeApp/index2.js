// const fs = require('fs');
import fs from 'fs';




// fs.appendFile("myFile.txt", "Hello World\n", (err) => {
//     if (err) throw err;
// });

fs.readFile("about.txt", (err, data) => {
    if (err) throw err;
    console.log(data.toString());
});