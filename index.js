let now = new Date();
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let day = days[now.getDay()];

let hour = now.getHours();
if (hour < 10) {
  hour = `0${hour}`;
}
let minutes = now.getMinutes();
if (minutes < 10) {
  minutes = `0${minutes}`;
}

let todayDate = document.querySelector("header");
todayDate.innerHTML = `${day}, ${hour}:${minutes}`;

function changeCity(event) {
  event.preventDefault();
  let city = document.querySelector("h1");
  let search = document.querySelector("#text-search");
  city.innerHTML = `${search.value}`;
}
let change = document.querySelector("form");
change.addEventListener("submit", changeCity);

function switchToF() {
  let newTemp = document.querySelector("h2");
  newTemp.innerHTML = `66°F`;
}
let revise = document.querySelector("#fahrenheit-temp");
revise.addEventListener("click", switchToF);

function switchToC() {
  let newTemp = document.querySelector("h2");
  newTemp.innerHTML = `19°C`;
}
let revise2 = document.querySelector("#celsius-temp");
revise2.addEventListener("click", switchToC);
