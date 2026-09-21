import fs from "fs"

console.log("Sync Task")

setTimeout(() => {
    console.log("Set Time Out")
}, 2000)

fs.writeFile("notes.txt", "hello ELCE-A", (err) => {

    if (err) {
        console.log(err)
        return
    }

    setTimeout(() => {
        console.log("inside fs module SetTimeout")
    }, 0)

    setImmediate(() => {
        console.log("inside fs module SetImmediate")
    })

    console.log("File has been written successfully")
})

setImmediate(() => {
    console.log("Set Immediate")
})

console.log("Last")
