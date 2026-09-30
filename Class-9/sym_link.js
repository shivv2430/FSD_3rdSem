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

// import fs from "fs";

// // 1. fs.symlink()
// // Used to create a symbolic link

// fs.symlink("notes.txt", "link.txt", (err) => {
//     if (err) {
//         console.log(err);
//         return;
//     }

//     console.log("1. Symbolic Link Created");


//     // 2. fs.stat()
//     // Gives information about the target file
//     // stat() follows the symbolic link

//     fs.stat("link.txt", (err, stats) => {
//         if (err) {
//             console.log(err);
//             return;
//         }

//         console.log("2. stat() isFile:", stats.isFile());


//         // 3. fs.lstat()
//         // Gives information about the symbolic link itself
//         // lstat() does NOT follow the symbolic link

//         fs.lstat("link.txt", (err, stats) => {
//             if (err) {
//                 console.log(err);
//                 return;
//             }

//             console.log("3. lstat() isFile:", stats.isFile());


//             // 4. fs.truncate()
//             // Changes the size of the file
//             // Here, notes.txt will be reduced to 10 bytes

//             fs.truncate("notes.txt", 10, (err) => {
//                 if (err) {
//                     console.log(err);
//                     return;
//                 }

//                 console.log("4. File Truncated");


//                 // 5. fs.rename()
//                 // Renames notes.txt to new_notes.txt

//                 fs.rename("notes.txt", "new_notes.txt", (err) => {
//                     if (err) {
//                         console.log(err);
//                         return;
//                     }

//                     console.log("5. File Renamed");


//                     // Remove symbolic link
//                     // because it still points to notes.txt

//                     fs.unlink("link.txt", (err) => {
//                         if (err) {
//                             console.log(err);
//                             return;
//                         }

//                         console.log("6. Symbolic Link Removed");


//                         // 6. Remove the renamed file
//                         // fs.rm() is used for files

//                         fs.rm("new_notes.txt", (err) => {
//                             if (err) {
//                                 console.log(err);
//                                 return;
//                             }

//                             console.log("7. File Removed");


//                             // 7. fs.rmdir()
//                             // Used to remove a directory

//                             fs.rmdir("myFolder", (err) => {
//                                 if (err) {
//                                     console.log(err);
//                                     return;
//                                 }

//                                 console.log("8. Directory Removed using rmdir");


//                                 // 8. fs.rmdirSync()
//                                 // Synchronous version
//                                 // It does NOT take a callback

//                                 fs.rmdirSync("myFolder2");

//                                 console.log(
//                                     "9. Directory Removed using rmdirSync"
//                                 );
//                             });
//                         });
//                     });
//                 });
//             });
//         });
//     });
// });