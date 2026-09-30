import fs from 'fs'
//fs.symlink() is used to create a symbolic link
fs.symlink("notes.txt", "link.txt", (err) => {
    if (err) {
        console.log(err);
        return
    }
    console.log("Symbolic Link Created");
})


//fs.stat()--> give information of target file 
fs.stat("link.txt", (err, stats) => {
    if (err) {
        console.log(err);
        return
    }
    console.log(stats.isFile());
})


//fs.lstat() is used to get the stats of the symbolic link
fs.lstat("link.txt", (err, stats) => {
    if (err) {
        console.log(err);
        return
    }
    console.log(stats.isFile());
})


//fs.rename --> is used for rename the file name 
fs.rename("notes.txt", "new_notes.txt", (err) => {
    if (err) {
        console.log(err);
        return
    }
    console.log("File Renamed");
})


//truncate--> is used to resize the file from here we can also truncate 
fs.truncate("notes.txt", 10, (err) => {
    if (err) {
        console.log(err);
        return
    }
    console.log("File Truncated");
})


//fs.rm --> is used to remove the file 
fs.rm("notes.txt", (err) => {
    if (err) {
        console.log(err);
        return
    }
    console.log("File Removed");
})

//fs.unlink --> is used to remove the link 
fs.unlink("link.txt", (err) => {
    if (err) {
        console.log(err);
        return
    }
    console.log("Link Removed");
})

//now again create link
fs.symlink("notes.txt", "link.txt", (err) => {
    if (err) {
        console.log(err);
        return
    }
    console.log("Symbolic Link Created");
})


//fs.rmdir --> is used to remove the directory
fs.rmdir("notes.txt", (err) => {
    if (err) {
        console.log(err);
        return
    }
    console.log("Directory Removed");
})


//fs.link --> is used to create a link 
fs.link("notes.txt", "link.txt", (err) => {
    if (err) {
        console.log(err);
        return
    }
    console.log("Link Created");
})


//synchronously delete folder
fs.rmdirSync("notes.txt", (err) => {
    if (err) {
        console.log(err);
        return
    }
    console.log("Directory Removed");
})
//