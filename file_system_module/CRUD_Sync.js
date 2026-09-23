// CRUD
//Sync
//Async
// --> Callback based method 
// --> Promises based method 

import fs from "node:fs";

// write
fs.writeFileSync("notes.txt", "Hello World");
console.log("Written to notes.txt");

// read
const data = fs.readFileSync("notes.txt", "utf-8");
console.log("Data:", data);

// update
fs.appendFileSync("notes.txt", "Hello World updated");
console.log("Updated notes.txt");

// delete
fs.unlinkSync("notes.txt");
console.log("Deleted notes.txt");
