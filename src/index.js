// 1

const buttonHour = document.querySelector('#btnStartHour');
const timeHour = document.querySelector('#timeHour');
buttonHour.addEventListener("click", () => {
  let time = 60;
  const interval = setInterval(() => {
    timeHour.textContent = time;

    if (time === 30) {
      alert('У вас залишилось половина часу');
    } else if (time === 0) {
      clearInterval(interval);
    }
    time--
  }, 1000);
});

// 2

const buttonSeconds = document.querySelector("#btnStartSeconds")
const timeSeconds = document.querySelector("#timeSeconds")
buttonSeconds.addEventListener("click", () => {
    let seconds = 30000 / 10;
    const intervalSeconds = setInterval(() => {
        timeSeconds.textContent = `${(seconds / 100)}`
        if(seconds === 1000) {
            buttonSeconds.style.background = "red"
        } else if (seconds === 0) {
          buttonSeconds.style.background = "green"
          clearInterval(intervalSeconds)
        }
        seconds -= 10
    }, 100)
})
