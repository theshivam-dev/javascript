// Step 1: Making the Request
// When you make a request using fetch, it returns a Promise that resolves to a Response object.

// Step 2: Converting Response to JSON
// To get the actual data, we use response.json(), which also returns a Promise.

// syntax 1
fetch("https://dummyjson.com/products").then((response) => {
  response.json().then((data) => {    // To get the actual data, we use response.json(), which also returns a Promise.
    console.log(data);
  });
});

// syntax 2
fetch("https://dummyjson.com/products").then((response)=>{
 return response.json()
}).then((data)=>{
    console.log(data);
})

// syntax 3 with implicit return
fetch("https://dummyjson.com/products") 
.then(resposne=>resposne.json())
.then(data=>{
    console.log(data);
}).catch((err)=>{
    console.log(err);
})

// By default, fetch() sends a GET request.This is a post request
// header is optional but Even if it's optional, it's a good habit to include the Content-Type header to ensure the server correctly interprets the request.
fetch('https://dummyjson.com/products/add', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      title: 'BMW Pencil',
      category: 'stationary'
      /* other product data */
    })
  })
  .then(res => res.json())
  .then(console.log)
  .catch((err)=>{
    console.log(err);
  })   
