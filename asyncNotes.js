// ------------------------------------------------------------Promise---------------------------------------------------------------
const promise = new Promise((resolve, reject) => {
  const data = true;
  if (data) {
    resolve("resolved");
  } else {
    reject("its reject");
  }
});

promise
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });

// ------------------------------------------------------------Fetch API---------------------------------------------------------------
fetch("https://api.github.com/users/torvalds")
  .then((response) => response.json())
  .then((data) => {
    console.log(data.location);
  })
  .catch((err) => {
    console.log("this is a error ", err);
  });

// ------------------------------------------------------------CallbackHell---------------------------------------------------------------
const wifiComplain = (callback) => {
  setTimeout(() => {
    console.log("complaint register");
    callback();
  }, 1000);
};
const complainAssign = (callback) => {
  setTimeout(() => {
    console.log("complaint assign to ISP");
    callback();
  }, 3000);
};
const complainProcess = (callback) => {
  setTimeout(() => {
    console.log("complain in processing");
    callback();
  }, 4000);
};
const complainResolved = (callback) => {
  setTimeout(() => {
    console.log("complain resolved");
    callback();
  }, 4000);
};
const complainClosed = (callback) => {
  setTimeout(() => {
    console.log("complain is going to closed");
    callback();
  }, 3000);
};
const customerFeedback = (callback) => {
  setTimeout(() => {
    console.log("gave feedback about our organization");
  }, 1000);
  callback();
};

wifiComplain(() => {
  complainAssign(() => {
    complainProcess(() => {
      complainResolved(() => {
        complainClosed(() => {
          customerFeedback(() => {
            console.log("Feedback register !");
          });
        });
      });
    });
  });
});

// ------------------------------------------------------------Aync Await---------------------------------------------------------------
const asyncFetch = async (url) => {
  const response = await (await fetch(url)).json();
  console.log(response);
};

asyncFetch("https://api.github.com/users/snowdenxedward");

function fetchData() {
  return fetch("https://jsonplaceholder.typicode.com/todos/1")
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => console.error(error));
}
fetchData();

async function asyncFetchData() {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  const data = await response.json(); 
  console.log(data);
}
asyncFetchData();
