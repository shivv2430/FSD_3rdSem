import EventEmitter from "node:events";

// Create instance of EventEmitter
const userEmitter = new EventEmitter();

// Mock database to store user records
const database = [];

// Step 1: Add user to database listener
userEmitter.on("signup", (userData) => {
    database.push(userData);
    console.log("--------------------------------------------------");
    console.log("✅ Step 1: User added to Database successfully!");
    console.log("   Record:", userData);
    console.log("   Total Users in Database:", database.length);
});

// Step 2: Welcome notification listener
userEmitter.on("signup", (userData) => {
    console.log("--------------------------------------------------");
    console.log(`🔔 Step 2: Welcome Notification sent!`);
    console.log(`   Message: "Welcome ${userData.name}! Thank you for signing up."`);
});

// Step 3: Send Email OTP listener
userEmitter.on("signup", (userData) => {
    // Generate a secure 6-digit OTP
    const otp = Math.floor(100000 + Math.random() * 900000);
    console.log("--------------------------------------------------");
    console.log(`✉️ Step 3: Email OTP sent!`);
    console.log(`   To: ${userData.email}`);
    console.log(`   OTP: ${otp} (valid for 5 minutes)`);
    console.log("--------------------------------------------------\n");
});

// Triggering user signup event with sample data
console.log("\n🚀 Triggering User Signup Event...");
userEmitter.emit("signup", {
    id: 1,
    name: "Shivani Pal",
    email: "shivani@example.com",
    createdAt: new Date().toISOString()
});
