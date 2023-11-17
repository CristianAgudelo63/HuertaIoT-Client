import axios from "axios";

export const firebase = axios.create({
  baseURL: import.meta.env.VITE_FIREBASE_URL,
});

export const realTimeWeatherAPI = axios.create ({
  method: 'GET',
  url: import.meta.env.VITE_REALTIME_WEATHER_URL,
  params: {
    location: import.meta.env.VITE_REALTIME_WEATHER_LOCATION,
    units: 'metric',
    apikey: import.meta.env.VITE_REALTIME_WEATHER_API_KEY
  },
  headers: {accept: 'application/json'}
});