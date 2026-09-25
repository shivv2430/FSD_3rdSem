import fs from 'fs'
fs.stat("config.txt", (err, stats) => {
    if (err) {
        console.log(err);
        return
    }
    console.log(stats);
})
console.log(stats.size);