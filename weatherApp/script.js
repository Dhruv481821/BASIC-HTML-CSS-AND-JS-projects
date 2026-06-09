const input = document.querySelector("input");
const button = document.querySelector("button");

const imgIcon = document.querySelector("#weather-images");

const weather = document.querySelector(".weather");

const apiKey = "13a35fa8436ac33517ffe8322dc81d85";
const fetchUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q="; 


async function checkWeather (city) {
    const response = await fetch(fetchUrl + city + `&appid=${apiKey}`);
    const data = await response.json();
    
    if(data.cod === "404") {
        weather.style.display = "none";
        alert("city not found!");
        return;
    }

    weather.style.display = "block";
    
    document.getElementById("temp").innerText = Math.round(data.main.temp) + "°C";
    document.getElementById("city").innerText = data.name;
    document.getElementById("per").innerText = data.main.humidity + "%";
    document.getElementById("speed").innerText = data.wind.speed + "km/h";
    

    if(data.weather[0].main == "Clouds") {
        imgIcon.src = "images/cloudy.png";
    } else if(data.weather[0].main == "Rain") {
        imgIcon.src = "images/rain.png";
    } else if (data.weather[0].main == "Drizzle") {
        imgIcon.src = "images/drizzle.jpg";
    } else if (data.weather[0].main == "Clear") {
        imgIcon.src = "images/sun.jpg";
    } else if(data.weather[0].main == "Mist") {
        imgIcon.src = "images/mist.png";
    }


    console.log(data);
}

input.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        checkWeather(input.value);
    }
});

button.addEventListener("click", () => {

    if (input.value.trim() === "") {
        alert("Please enter a city name");
        return;
    }
    
    checkWeather(input.value);
    
});
