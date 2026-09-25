import fs from "fs/promises"

async function greet() {
    return "Hello"
}

greet()
    .then((res) => {
        console.log(res);
    })
    .catch((error) => {
        console.log(error);
    })

fs.writeFile("log.txt", "user signup")
    .then((res) => {
        console.log(res);
    })
    .catch((error) => {
        console.log(error);
    })

fs.readFile("log.txt", "utf-8")
    .then((res) => {
        console.log(res);
    })
    .catch((error) => {
        console.log(error);
    })

async function fileHandling(filename) {
    await fs.writeFile(filename, content)
    console.log("File created")

    const data = await fs.readFile(filename, { encoding: utf8 })
    console.log("Data", data);
}
fileHandling("user.txt", "Username: Nishtha")