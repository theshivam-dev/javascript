const secondOutput = document.getElementById("second");
const minuteOutput = document.getElementById("minute");
const hourOutput = document.getElementById("hour");

let secondTime = 0;
let minute = 0;
let hour = 0;

const clock = setInterval(() => {
  secondTime++;
  secondOutput.innerHTML = secondTime;

  if (secondTime === 60) {
    secondTime = 0;
    minute++;
    minuteOutput.innerHTML = minute;

    if (minute === 60) {
      minute = 0;
      hour++;
      hourOutput.innerHTML = hour;

      if (hour === 24) {
          hour = 0;
      }
    }
  }
}, 1000);
