console.log("Start");
Promise.resolve().then(() => {
    console.log("Promise");
});

setTimeout(() => {
    console.log("Timeout");
}, 0);

console.log("End");

//  Step 1: Synchronous code runs first

// JS always runs normal code first.

// So:

// Start
// End

// Step 2: Now the event loop decides what runs next

// There are two queues:

// 1️⃣ Microtask queue → Promises
// 2️⃣ Macrotask queue → setTimeout

// 🔥 Important rule:

// Microtasks run before macrotasks.

// So after End:

// Promise callback runs first

// Then setTimeout runs