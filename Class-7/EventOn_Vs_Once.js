import EventEmitter from "node:events";

const emitter = new EventEmitter()
emitter.on("login", () => {
    console.log("user logged in using on method")

})
console.log("First login");
emitter.emit("login")

console.log("Second login")
emitter.emit("login")

console.log("Third login")
emitter.emit("login")

// -----------------------------------------------------------------------------
// Task: User signup -> Save to Database -> Welcome Notification -> Send Email OTP
// -----------------------------------------------------------------------------

console.log("\n--- User Signup Flow ---");

// Simulated Database
const userDatabase = [];

// 1. Add user to Database (using .once because signup is done only once per user)
emitter.once("signup", (userData) => {
    userDatabase.push(userData);
    console.log(`1. [Database] User '${userData.name}' added to database successfully.`);
    console.log("   Current Database Records:", userDatabase);
});

// 2. Notification of Welcome message
emitter.once("signup", (userData) => {
    console.log(`2. [Notification] 🔔 Welcome to our platform, ${userData.name}! Your account has been created.`);
});

// 3. Email OTP send
emitter.once("signup", (userData) => {
    // Generate a 6-digit OTP
    const otp = Math.floor(100000 + Math.random() * 900000);
    console.log(`3. [Email Service] ✉️ OTP ${otp} sent to ${userData.email} for email verification.`);
});

// Triggering user signup event
const newUser = {
    id: 101,
    name: "Shivani",
    email: "shivani@example.com",
    signupTime: new Date().toLocaleTimeString()
};

emitter.emit("signup", newUser);

// Demonstrating 'once': Emitting signup again will NOT execute because 'once' triggers only once!
console.log("\n--- Trying to emit signup again (demonstrating .once) ---");
emitter.emit("signup", newUser);
console.log("(Notice no duplicate entry or email was sent because .once was used!)\n");
