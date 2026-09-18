import fs from "fs"

console.log("Sync Task")
//SetTimeout==> time taken "initially" (eg:2000ms) and run "once" after that particular time period
setTimeout(() => {
    console.log("Set Time Out")
}, 2000)
//Interval ==> time taken "initially" (eg:1000ms) and run "after every" particular time period
setInterval(() => {
    console.log("Interval")
}, 1000)

// writeFile is asynchronous
//write file==> checks first if file is empty or not,
//if empty==>writes the data and pushes it to the poll phase, after the phase it gets executed but after 1 microsecond
//if not empty==>writes the data and pushes it to the check phase, after the phase it gets executed but after 0 microsecond
fs.writeFile("notes.txt", "hello ELCE-A", (err) => {
    if (err) {
        console.log(err)
        return
    }
    console.log("File has been written successfully")
})
setImmediate(() => {
    console.log("Set Immediate")
})

console.log("Last")