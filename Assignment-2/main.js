const EventEmitter = require('events');
const studentEmitter = new EventEmitter();

studentEmitter.on("login", () => {
    console.log("Student logged in successfully.");
});

studentEmitter.on("assignmentSubmitted", (assignment) => {
    console.log(`Student submitted ${assignment}.`);
});

studentEmitter.on("logout", () => {
    console.log("Student logged out successfully.");
});

studentEmitter.on("exit", () => {
    console.log("Exiting application...");
});

// Simulate events
studentEmitter.emit("login");
studentEmitter.emit("assignmentSubmitted", "Math Homework");
studentEmitter.emit("logout");
studentEmitter.emit("exit");
