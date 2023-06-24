import axios from 'axios';

const options = {
  method: 'GET',
  url: 'https://api.tomorrow.io/v4/weather/realtime',
  params: {
    location: import.meta.env.VITE_REALTIME_WEATHER_API_KEY,
    units: 'metric',
    apikey: import.meta.env.VITE_REALTIME_WEATHER_LOCATION
  },
  headers: {accept: 'application/json'}
};

axios
  .request(options)
  .then(function (response) {
    console.log(response.data);
  })
  .catch(function (error) {
    console.error(error);
  });