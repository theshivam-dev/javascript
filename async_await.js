// Even though async/await looks synchronous, it is still non-blocking. 
// The JavaScript engine continues executing other code while waiting for the asynchronous operation to complete
// This is because async/await is syntactic sugar over Promises - it doesn't block the event loop
// The function appears to pause at each 'await' but actually yields control back to the event loop

// Syntax of async function
// Async functions always return a Promise, even if you return a primitive value
const asyncFunction = async () => {
  return "hello"; // Automatically wrapped in a resolved promise
};
asyncFunction(); // Returns promise that resolves with "hello"

// Error handling in async functions
const makeReject = async () => {
  console.log("________********_________");
  // throw "error in program";   // While possible, throwing raw values is bad practice:
  // 1. No stack trace information
  // 2. Harder to debug
  // 3. Non-standard error handling
  
  throw new Error("this is error"); // Always use Error constructor for proper error objects
  // Unhandled promise rejection! Need to use try/catch or .catch() when calling
};
makeReject().catch(err => console.log("Caught error:", err)); // Proper error handling

// Traditional Promise approach vs async/await
async function makeFetchRequest() {
  const url = 'https://api.github.com/users/snowdenxedward'
  const responsePromise = fetch(url)
  
  // Promise chaining can become nested and complex
  responsePromise.then((response) => response.json())
    .then((data) => {
      console.log("Promise result:", data);
    })
    .catch(err => console.log("Promise error:", err))
}
makeFetchRequest()

// Async/await makes asynchronous code more linear and readable
async function asyncFetchRequest() {
  try {
    const url = 'https://api.github.com/users/snowdenxedward'
    
    // Breaking into separate await steps improves readability
    // The await keyword pauses function execution BUT NOT the entire program
    const response = await fetch(url) // While waiting, JS can handle other events
    
    // At each await, the engine can process other tasks:
    // - Handle user input
    // - Process other API calls
    // - Run animation frames
    
    const data = await response.json() // Wait for parsing to complete
    console.log("Async/await result:", data);
    
    // Equivalent to:
    // fetch(url).then(res => res.json()).then(data => ...)
  } catch (err) {
    console.log("Async error:", err); // Single catch block for all errors
  }
}
asyncFetchRequest()

// Execution order example:
console.log("Script start");
asyncFunction()
  .then(() => console.log("Async function resolved"));
console.log("Script end");
// Output order:
// "Script start"
// "Script end"
// "Async function resolved" - demonstrates non-blocking nature
