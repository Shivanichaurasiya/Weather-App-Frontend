// const apiKey = "1a898463f7fe17e40ba0389e1265a51c";
      async function getWeather(city) {
        const weatherResult = document.getElementById("weatherResult");
        weatherResult.textContent = "Loading..";

        try {
          const response = await fetch(
            `https://weather-app-backend-xujf.onrender.com/api/weather?city=${city}`
          );

            console.log(response);
          if (!response.ok) {
            throw new Error(`city not found`);

          }
          const data = await response.json();
            console.log(data)

          weatherResult.innerHTML = `
          <h2>Weather in ${data.name}</h2>
          <p>Temperature:${data.main.temp} ℃</p>
          <p>Humidity:${data.main.humidity}%</p>
          <p>Condition:${data.weather[0].description}</p>`;
        } catch (error) {
          (weatherResult.textContent = "Error: "+ error.message);
        }
      }
      document
        .getElementById("getweatherBtn")
        .addEventListener("click", (e) => {
          e.preventDefault();
          const city = document.getElementById("cityInput").value.trim();
          if (city) {
            getWeather(city);
          }
        });