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
console.log(debounceCallApi);

input.addEventListener("input", debounceCallApi);
