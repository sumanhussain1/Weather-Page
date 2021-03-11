let weather = {
    paris: {
      temp: 19.7,
      humidity: 80
    },
    tokyo: {
      temp: 17.3,
      humidity: 50
    },
    lisbon: {
      temp: 30.2,
      humidity: 20
    },
    "san francisco": {
      temp: 20.9,
      humidity: 100
    },
    moscow: {
      temp: -5,
      humidity: 20
    }
  };
  
  let city = prompt("What is your city?");
  city = city.toLowerCase();
  if (weather[city] !== undefined) {
    let celsiusTemperature = weather[city].temp;
    let fahrenheitTemperature = Math.round((celsiusTemperature * 9) / 5 + 32);
    let humidity = weather[city].humidity;
    alert(
      `It is currently ${celsiusTemperature}°C (${fahrenheitTemperature}°F) in ${city} with a humidity of ${humidity}%`
    );
  } else {
    alert(
      "Sorry, we don't know the weather for this city, try Google: www.google.co.uk"
    );
  }
  let now = new Date();
  let h3 = document.querySelector(".date");
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];
  
  let day = days[now.getDay()];
  let hour = now.getHours();
  let minutes = now.getMinutes();
  
  h3.innerHTML = `${day} ${hour}:${minutes}`;
  
  function search(event) {
    event.preventDefault();
    let city = document.querySelector("#city-input");
    let h1 = document.querySelector("h1");
    h1.innerHTML = city.value;
    currentInformation(city.value);
  }
  
  let form = document.querySelector("#search-form");
  form.addEventListener("submit", search);
  
  function showTemp(response) {
    document.querySelector("h2").innerHTML = Math.round(response.data.main.temp);
  }
  
  function currentInformation(city) {
    let apiKey = "e82b657d5316f24023c44a5fcb8499df";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(`${apiUrl}`).then(showTemp);
  }
  