// import fs from "node:fs";

// //createReadStream()-->(buffer) are data chunk and we can read large file using stream 
// const stream = fs.createReadStream("file.txt", "utf8");

// stream.on("data", (chunk) => {
//     console.log(chunk);
// });

// stream.on("end", () => {
//     console.log("File reading completed!");
// });

// // //fs.CreateWriteStream-->(buffer) are data chunk and we can write large file using stream 
// // import fs from "node:fs";

// const writeStream = fs.createWriteStream("output.txt");

// writeStream.write("Hello Shivani!\n");
// writeStream.write("This is Node.js.\n");
// writeStream.write("We are learning streams.");

// writeStream.end();

// stream.on("finish", () => {
//     console.log("Writing completed!");
// });

// //events : 
// //open --> when stream is open
// //data --> when data is read
// //end --> when stream is read completely
// //error --> when stream is not found

// // //data-event => it recive data in chunks from file 
// // import fs from "node:fs";

// const stream1 = fs.createReadStream("file.txt", "utf8");

// stream.on("data", (chunk) => {
//     console.log("Received:", chunk);
// });


// //end-event => when stream is read completely
// stream.on("end", () => {
//     console.log("File reading completed!");
// });

// //error event=> when stream is not found
// stream.on("error", (err) => {
//     console.log("Error:", err.message);
// });



import fs from "node:fs";

// ---------------- READ STREAM ----------------

const stream = fs.createReadStream("file.txt", "utf8");

// data → receives data in chunks
stream.on("data", (chunk) => {
    console.log("Received:", chunk);
});

// end → file has been completely read
stream.on("end", () => {
    console.log("File reading completed!");
});

// error → problem while reading
stream.on("error", (err) => {
    console.log("Reading Error:", err.message);
});


// ---------------- WRITE STREAM ----------------

const writeStream = fs.createWriteStream("output.txt");

writeStream.write("Hello Shivani!\n");
writeStream.write("This is Node.js.\n");
writeStream.write("We are learning streams.");

writeStream.end();

// finish → all data has been written
writeStream.on("finish", () => {
    console.log("Writing completed!");
});

// error → problem while writing
writeStream.on("error", (err) => {
    console.log("Writing Error:", err.message);
});