import fs from "node:fs";
//jis file ko track krna h uska name ayega like file.txt here 
//then callback function will run in which event type and filename will come 

//eventType --> means change , rename, recursive or close 
//filename --> means file name

fs.watchFile("info.txt", (curr, prev) => {
    console.log("prev: ", prev)
    console.log("curr: ", curr)
});

//this will watch the file for any changes 

//this is asynchronous method

