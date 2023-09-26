import { useState, useEffect } from 'react';
import axios from 'axios';

const [clima, setClima] = useState('');
const newData = clima

useEffect(() => {
  sendData();
}, []);

const options = {
  method: 'GET',
  url: 'https://api.tomorrow.io/v4/weather/realtime',
  params: {
    location: import.meta.env.VITE_REALTIME_WEATHER_LOCATION,
    units: 'metric',
    apikey: import.meta.env.VITE_REALTIME_WEATHER_API_KEY
  },
  headers: {accept: 'application/json'}
};

axios.request(options)
  .then(function (response) {
    newData = response.data
    setClima(newData);
  })
  .catch(function (error) {
    console.error(error);
  }
  );

const sendData = async (newData) => {
  try {
    await axios.put(
      import.meta.env.VITE_FIREBASE_URL_CLIMA_AMBIENTAL,JSON.stringify(newData)
    );
    console.log('Datos enviados correctamente');
  } catch (error) {
    console.error('Error al enviar los datos:', error);
  }
};

window.setInterval(sendData,2000)