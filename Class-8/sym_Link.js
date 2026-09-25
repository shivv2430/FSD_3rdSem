//sym link : symbolic link
import fs from 'fs'


fs.symlink("source.txt", "link.txt", (err) => {
    if (err) {
        console.log(err);
        return
    }

    console.log("Symlink Created");
})

fs.unlink("link.txt", (err) => {
    if (err) {
        console.log(err);
        return
    }
    console.log("Link deleted");
})