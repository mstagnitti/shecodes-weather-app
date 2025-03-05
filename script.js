function search(event) {
  event.preventDefault();
  let searchInputElement = document.querySelector("#search-input");
  let searchInputValue = searchInputElement.value;

  let apiKey = "aa50c5taa349ad0ccb0b41133of3fd60";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${searchInputValue}&key=${apiKey}&units=metric`;
  axios.get(apiUrl).then(changeTemp);
}

function changeTemp(response) {
  let city = response.data.city;
  let cityElement = document.querySelector("#current-city");
  cityElement.innerHTML = city;

  let temperature = Math.round(response.data.temperature.current);
  let currentTemp = document.querySelector(".current-temperature-value");
  currentTemp.innerHTML = temperature;
}

function formatDate(date) {
  let minutes = date.getMinutes();
  let hours = date.getHours();
  let day = date.getDay();

  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  if (hours < 10) {
    hours = `0${hours}`;
  }

  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let formattedDay = days[day];
  return `${formattedDay} ${hours}:${minutes}`;
}

let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", search);

let currentDateELement = document.querySelector("#current-date");
let currentDate = new Date();

currentDateELement.innerHTML = formatDate(currentDate);
