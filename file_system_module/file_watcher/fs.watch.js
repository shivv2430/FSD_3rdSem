import fs from "node:fs";
//jis file ko track krna h uska name ayega like file.txt here -->operating system based
//then callback function will run in which event type and filename will come 

//eventType --> means change , rename, recursive or close 
//filename --> means file name

fs.watch("info.txt", (eventType, filename) => {
    console.log("Event -> ", eventType);
    console.log("Filename -> ", filename);
    console.log("File changed", filename);

});

//this will watch the file for any changes 

//this is asynchronous method

// encoding:'utf8'  as a third method is used to get the file in string format 
//otherwise it will come in buffer format 
//and encoding is optional 
//interval as a 4th method is used to set the interval in which the file will be watched 
//and interval is optional 
//time in which file will be watched -> 2000ms in this case 
// file watcher application--> stock matket monitoring 


// //Homework--
// fs.CreateWriteStream -->
// fs.CreateReadStream -->
// events-->data event ,end event, error event 
