// Promise is object it contain .then .catch .finally methods 
const promise = new Promise((resolve, reject) => {
  let val = Math.floor(Math.random() * 10);
  if (val < 5) {
    resolve("resolved");
  } else {
    reject("reject");
  }
});

promise
  .then((data) => {
    console.log(data);
  })
  .catch((data) => {
    console.log(data);
  })
  .finally(() => {
    console.log("finally ");
  });
