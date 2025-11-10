const axios = require('axios');
require('dotenv').config();

const city = process.argv[2];

if (!city) {
    console.log('Please provide a city name.');
    process.exit(1);
}

const apiKey = process.env.OPENWEATHER_API_KEY;
const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

axios.get(url)
    .then(response => {
        const temperature = response.data.main.temp;
        const weatherDescription = response.data.weather[0].description;
        console.log(`Temperature in ${city}: ${temperature}°C, ${weatherDescription}`);
    })
    .catch(error => {
        console.error('Error fetching weather data:', error.response ? error.response.data.message : error.message);
    });