import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
);

export default function Graph() {

  const [data, setData] = useState('');

  const limit = [600,600,600,600,600];
  const time = ["0'","30'", "60'", "90'", "120'"];
  const newData = [data,data,data,data,data]
  
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
   try {
      const response = await axios.get(
        'https://dev-huerta-iot-fesa-default-rtdb.firebaseio.com/A0.json',JSON.stringify(newData)
      );
      setData(response.data);
    } catch (error) {
      console.error('Error al obtener los datos:', error);
    }
  };

  const datos = {
    labels: time,
    datasets: [
      // Cada una de las líneas del gráfico
      {
        label: "Humedad en el suelo",
        data: newData,
        tension: 0.5,
        fill: true,
        borderColor: "rgb(34, 139, 230)",
        backgroundColor: "rgba(34, 139, 230, .5)",
        pointRadius: 5,
        pointBorderColor: "rgb(34, 139, 230)",
        pointBackgroundColor: "rgb(34, 139, 230)",
      },
      {
        label: 'Límite de Humedad',
        data: limit,
        fill: false,
        borderColor: 'rgba(255,0,0,.5)'
      }
    ],
  };
  
  const options = {
    scales: {
      y: {
        min: 0,
        max: 1023,
      }
    },
  };
  
  return <Line data={datos} options={options} />
}
