const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minutesEl = document.getElementById("minutes");
const secondsEl = document.getElementById("seconds");

document.getElementById("button").addEventListener("click", () => {
  const date = document.getElementById("date");
  const month = document.getElementById("month");
  const year = document.getElementById("year");

  startCountDown(date.value, month.value, year.value);
});

function startCountDown(date, month, year) {
  const birthday = `${date} ${month} ${year}`;

  function countDown() {
    const birthdate = new Date(birthday);
    const currentDate = new Date();

    const totalSeconds = (birthdate - currentDate) / 1000;

    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const minutes = Math.floor(totalSeconds / 60) % 60;
    const seconds = Math.floor(totalSeconds) % 60;

    if (days) daysEl.innerHTML = days;
    hoursEl.innerHTML = formateTime(hours);
    minutesEl.innerHTML = formateTime(minutes);
    secondsEl.innerHTML = formateTime(seconds);
  }

  function formateTime(time) {
    return time < 10 ? `0${time}` : time;
  }

  countDown();

  setInterval(countDown, 1000);

  clearFields();

  const btn = document.getElementById("button");
  // const fields = document.getElementsByName("input");
  // fields.forEach(field =>{
  //     field.setAttribute
  // })
  btn.innerHTML = "restart";
  document.getElementById("button").addEventListener("click", () => {
    window.location.reload();
  });
}

function clearFields() {
  date.value = "";
  month.value = "";
  year.value = "";
}
