const toggle = document.querySelector('.toggle');
const hourEl = document.querySelector('.hour');
const minuteEl = document.querySelector('.minute');
const secondEl = document.querySelector('.second');
const timeEl = document.querySelector('.time');
const dateEl = document.querySelector('.date');
const threeEl = document.querySelector('.three');

const days = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];

const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

toggle.addEventListener('click', (e) => {
  const html = document.querySelector('html');
  if (html.classList.contains('dark')) {
    html.classList.remove('dark');
    e.target.innerText = 'Dark Mode';
  } else {
    html.classList.add('dark');
    e.target.innerText = 'Light Mode';
  }
});

function setTime() {
  const dateObj = new Date();
  const seconds = dateObj.getSeconds();
  const minutes = dateObj.getMinutes();
  const hours = dateObj.getHours();
  const day = dateObj.getDay();
  const month = dateObj.getMonth();
  const date = dateObj.getDate();
  const hoursForClock = hours % 12;
  if (seconds === 59 || seconds === 0) {
    secondEl.style.transition = 'none';
  } else {
    secondEl.style.transition = 'all .3s ease';
  }
  secondEl.style.transform = `translate(-50%,-100%) rotate(${scale(
    seconds,
    0,
    59,
    0,
    354
  )}deg)`;

  minuteEl.style.transform = `translate(-50%,-100%) rotate(${scale(
    minutes,
    0,
    59,
    0,
    354
  )}deg)`;

  hourEl.style.transform = `translate(-50%,-100%) rotate(${scale(
    hoursForClock,
    0,
    11,
    0,
    330
  )}deg)`;
  // console.log(hourEl);

  timeEl.innerHTML = `${hoursForClock === 0 ? '12' : hoursForClock}:${
    minutes < 10 ? `0${minutes}` : minutes
  } ${hours >= 12 ? 'PM' : 'AM'}`;

  dateEl.innerHTML = `${days[day]} ${months[month]} <span class="circle">${date}</span>`;
}

function scale(number, inMin, inMax, outMin, outMax) {
  return ((number - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
}

// setTime();

setInterval(setTime, 1000);
