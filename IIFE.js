// Immediately Invoked Function Expression 

// function a() {
//     console.log('its not iife');
// }

// a() 

(function () {
    console.log('IIFE Function');    
   })() 
   

;(function () {
   const h1 = document.getElementById('h1')
const p = document.getElementById('p')
const num = 120

h1.style.backgroundColor='pink'
p.style.color='black'
p.innerHTML=num 
})()


;(function () {
  console.log('another IIFE function');  
}())


;(()=>{
console.log('Arrow IIFE');
})() 


+function(){       // we can use - [not operator ! ] [bitwise operator `] [void] [new]
console.log('The + before function is a unary plus operator.It forces JavaScript to interpret the function as an expression instead of a declaration.Then, the () at the end immediately executes the function.');
}()  

const a = function name() {
  console.log('IIFE function expression but we dont use because it pollute global space');  
}()

true && (function () {
   console.log('Another IIFE'); 
})() 

false || (function () {
    console.log('false and OR');
})() 

true ? (function () {
    console.log('IIFE');
})() : ''


try {
    (function () {
      console.log('try catch IIFE ');  
    })()
} catch (error) {
 console.log(error);   
}

// try {
//     throw function () {
//         console.log('IIFE');
//     }
// } catch (error) {
//     error()
// }
