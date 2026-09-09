//callback function

function greet(username, callback) {
    console.log("Welcome");
    if (typeof callback === "function") {
        callback(username);
    }
}
greet("shivani", (username) => {
    console.log("Hello ", username);
});