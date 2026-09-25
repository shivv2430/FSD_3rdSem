//sync
//async
//---callback based
//---promises based


import fs from 'fs'

fs.writeFileSync("notes.txt", "Hello world")

fs.readFileSync("notes.txt", "utf8")
console.log("Data :", data);
//utf8 for encoding text 
fs.appendFileSync