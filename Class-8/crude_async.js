import fs from 'fs'

fs.writeFile("config.txt", (err) => {
    if (err) {
        console.log(err);
        return
    }
    console.log("File created");
})

fs.appendFile("config.txt", (err) => {
    if (err) {
        console.log(err);
        return
    }
    console.log("File updated");
})
fs.rm("config.txt", (err) => {
    if (err) {
        console.log(err);
        return
    }

    console.log("File deleted");
})