# JavaScript Debouncing

## What is Debouncing?
Debouncing is a technique used in JavaScript to **delay the execution** of a function until after a certain period of inactivity. It is commonly used for optimizing performance in scenarios where an event fires multiple times in quick succession, such as:

- User typing in a search box (API calls should be minimized)
- Window resizing events
- Button clicks
- Scroll events

## Implementation of Debounce in JavaScript
The following code demonstrates how to implement a debounce function in JavaScript:

```javascript
const input = document.getElementById("input");

const debounce = (func, wait) => {
  let timerId;
  return (...args) => {
    clearTimeout(timerId);
    timerId = setTimeout(() => func(...args), wait);
  };
};

const callApi = (e) => {
  console.log("Calling Api", e.target.value);
};

const debounceCallApi = debounce(callApi, 1000);

console.log(debounceCallApi); // Logs the debounced function

input.addEventListener("input", debounceCallApi);
```

## Explanation
1. **`debounce(func, wait)` Function:**
   - Accepts a function (`func`) and a delay (`wait`) in milliseconds.
   - Returns a new function that delays execution of `func`.
   - If the function is called again within the `wait` time, the previous timer is cleared and reset.

2. **`callApi(e)` Function:**
   - Simulates an API call by logging the input value when the function is executed.

3. **Event Listener:**
   - `input.addEventListener("input", debounceCallApi);`
   - When the user types in the input field, the function execution is delayed by `1000ms`.
   - If the user types continuously, the timer resets, preventing unnecessary API calls.

## Expected Behavior
- If the user types "hello" quickly, `callApi` executes only once **after 1 second** of inactivity.
- If the user keeps typing without pausing, the API call is delayed further.
- This reduces unnecessary function calls and improves performance.

## Advantages of Debouncing
✅ Prevents excessive API calls and improves performance.  
✅ Reduces load on the server.  
✅ Enhances user experience by avoiding unnecessary flickering or lag.

---
**Use Case Example:** Applying debouncing in a **search bar** to minimize API requests while a user types.
