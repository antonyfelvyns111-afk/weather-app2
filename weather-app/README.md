# Weather App

This is a simple Node.js weather application that fetches weather data from the Open Weather API based on the city name provided as a command-line argument.

## Features

- Fetches current weather data for a specified city.
- Displays temperature and weather conditions.

## Prerequisites

- Node.js installed on your machine.
- An Open Weather API key.

## Installation

1. Clone the repository:

   ```
   git clone <repository-url>
   ```

2. Navigate to the project directory:

   ```
   cd weather-app
   ```

3. Install the required dependencies:

   ```
   npm install
   ```

4. Create a `.env` file in the root directory and add your Open Weather API key:

   ```
   OPENWEATHER_API_KEY=your_api_key_here
   ```

   You can use the `.env.example` file as a reference.

## Usage

To run the application and fetch weather data for a specific city, use the following command:

```
node index.js "CityName"
```

For example, to get the weather for London:

```
node index.js "London"
```

## License

This project is licensed under the MIT License.