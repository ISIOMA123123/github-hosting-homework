let searchform = document.querySelector("#search-form");
searchform.addEventListener("submit", function search(event) {

    event.preventDefault();
    let searchInputElement = document.querySelector("#search-input");
    let cityElement = document.querySelector("#current-city");


let apiKey = "7d3fo7t42ac4a88b5f1b6383fbbe2b0b";
let city = searchInputElement.value;
let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;




axios.get(apiUrl).then(function getTemperature(response) {


    console.log(response);
    let temperature = Math.round(response.data.temperature.current);
    console.log(temperature);
   
    let cities = (response.data.city);
    console.log(cities);


    let currentCity = document.querySelector("#current-city");
    console.log(currentCity);


    currentCity.innerHTML = `${cities}`;


    let currentTemperaturenow = document.querySelector("#current-temperaturenow");
    console.log(currentTemperaturenow);
    currentTemperaturenow.innerHTML = `${temperature}`;



});


    cityElement.innerHTML = searchInputElement.value;
    
});




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
  return `${formattedDay} ${hours}:${minutes}`;j
}


let currentDateELement = document.querySelector("#current-date");
let currentDate = new Date();

currentDateELement.innerHTML = formatDate(currentDate);
  
