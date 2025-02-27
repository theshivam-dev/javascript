// The this keyword in JavaScript refers to the object that is currently executing the function. Its value depends on the context in which the function is called.

// ********************************************************* console ******************************************************************
console.log(this); // In browser: window, In Node.js: {}

// ********************************************************* Function ******************************************************************
function show() {
  console.log(this);
}
show(); // In browser: window (non-strict mode) OR undefined (strict mode)

// ********************************************************* Object ******************************************************************
const obj = {
  name: "Kevin",
  greet: function () {
    console.log(this.name); // "Kevin"
  },
};
obj.greet();

const user = {
  name: "kevin",
  thisFunction() {
    function thisinsideFunction() {
      console.log(this); // its refer to window object
    }
    thisinsideFunction();
    console.log(this); // it refers to user object
  },
};
user.thisFunction();
// ******************************************************* Constructor Function ************************************************************
// When using new, this refers to the new object being created

function Developer(name) {
  this.name = name;
}
const kevin = new Developer("Kevin");
console.log(kevin.name); // "Kevin"

// ******************************************************* Arrow Function ************************************************************
const arrowFunctionObject = {
  name: "Kevin",
  greet: () => {
    console.log(this.name); // `this` is inherited from the outer scope, likely `window`
  },
};
arrowFunctionObject.greet(); // undefined

// ********************************************************* DOM ******************************************************************
// document.querySelector("button").addEventListener("click", function () {
//   console.log(this); // In an Event Listener (this refers to the element that fired the event) [button]
// });
