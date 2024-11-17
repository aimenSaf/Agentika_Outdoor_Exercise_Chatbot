import React, { useEffect, useState } from 'react';
import { Agent, TTS, DefaultPrompts, Prompt } from 'react-agents';
import axios from 'axios';

const WEATHER_API_KEY = '3ca9d5adbb92478f9e3222355241611';
const WEATHER_API_URL = 'https://api.weatherapi.com/v1/forecast.json';

export default function WeatherAgent() {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [recommendation, setRecommendation] = useState('');

  useEffect(() => {
    console.log(
      "Disclaimer: I am an AI assistant here to help you find the best times for outdoor activities based on current weather conditions."
    );
  }, []);

  const fetchWeather = async (location = "London", days = 1) => {
    setLoading(true);

    try {
      const response = await axios.get(`${WEATHER_API_URL}?key=${WEATHER_API_KEY}&q=${location}&days=${days}`);
      if (response.data && response.data.forecast) {
        const forecastWeather = response.data.forecast.forecastday[0];  // Get the forecast for today
        setWeather(forecastWeather);
        recommendExercise(forecastWeather);
      } else {
        console.error('Error fetching weather');
        setRecommendation('Unable to fetch weather data.');
      }
    } catch (error) {
      console.error('Error fetching weather:', error);
      setRecommendation('Unable to fetch weather data.');
    }

    setLoading(false);
  };

  const recommendExercise = (forecastDay) => {
    const hours = forecastDay.hour.filter(hour => hour.temp_c >= 10 && hour.temp_c <= 25 && hour.condition.code === 1000);
    let activityRecommendation = "It might not be the best day to exercise outdoors.";
    let challenge = getWeatherChallenge(forecastDay.hour[0]); // Assuming first hour's data representative of the day

    if (hours.length > 0) {
      const bestTimes = hours.map(hour => hour.time.split(' ')[1]).join(', ');
      activityRecommendation = `Great weather for outdoor exercise during these times: ${bestTimes}`;
    }

    setRecommendation(`${activityRecommendation} Also, here's a fun challenge: ${challenge}`);
  };

  const getWeatherChallenge = (weatherData) => {
    const { temp_c, condition } = weatherData;

    if (condition.code === 1000) { // Clear weather
      return "Challenge: Take a photo of the clearest blue sky and share it on your social network with #BlueSkyChallenge!";
    } else if (condition.code >= 1063 && condition.code <= 1183) { // Rain
      return "Game: Count how many raindrops hit your window in a minute!";
    } else if (temp_c < 0) { // Freezing temperatures
      return "Challenge: Build a snowman and share your creation with #SnowmanBuilder!";
    } else {
      return "Activity: Write a weather poem and reflect on how today's weather makes you feel.";
    }
  };

  return (
    <Agent>
      <DefaultPrompts />
      <Prompt>Ask me when to go outside for exercise and what fun activities you can do today!</Prompt>
      <TTS voiceEndpoint="elevenlabs:scillia:kNBPK9DILaezWWUSHpF9" />
      
      <button onClick={() => fetchWeather()}>Check Weather for Exercise and Fun</button>

      {loading && <p>Loading weather data...</p>}

      {!loading && weather && (
        <div>
          <h3>Weather Forecast for Today:</h3>
          {weather.hour.map((hour, index) => (
            <p key={index}>{hour.time.split(' ')[1]} - Temp: {hour.temp_c}°C, Condition: {hour.condition.text}</p>
          ))}
          <h4>{recommendation}</h4>
        </div>
      )}

      {!weather && !loading && <p>No weather data available. Click the button to check!</p>}
    </Agent>
  );
}
