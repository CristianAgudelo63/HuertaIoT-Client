import { useState, useEffect } from 'react';
import { Grid, Text, Title as Titulo } from '@mantine/core';
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

const Graph = () => {

  const [data, setData] = useState('');
  const [value, setValue] = useState('');
  const newData = [data]
  const newValue = ''
  
  useEffect(() => {
    fetchData();
    fetchValue();
  }, []);

  const fetchData = async  () => {
    try {
       const response = await axios.get(
         'https://dev-huerta-iot-fesa-default-rtdb.firebaseio.com/HUMEDAD.json',JSON.stringify(newData)
       );
       setData(response.data);
     } catch (error) {
       console.error('Error al obtener los datos:', error);
     }
   };

   const fetchValue = async  () => {
    try {
       const response = await axios.get(
         'https://dev-huerta-iot-fesa-default-rtdb.firebaseio.com/ELECTROVALVULA.json',JSON.stringify(newValue)
       );
       setValue(response.value);
     } catch (error) {
       console.error('Error al obtener los datos:', error);
     }
   };

  const datos = {
    labels: [0],
    datasets: [
      {
        label: "Humedad Del Suelo",
        data: [0],
        tension: 0.5,
        fill: true,
        borderColor: "rgb(34, 139, 230)",
        backgroundColor: "rgba(34, 139, 230, .5)",
        pointRadius: 5,
        pointBorderColor: "rgb(34, 139, 230)",
        pointBackgroundColor: "rgb(34, 139, 230)",
      },
    ],
  }

  const options = {
    scales: {
      y: {
        min: 0,
        max: 1023,
      }
    },
  }

  const timeOfRefress = () => {
    let times = new Date()
    times = times.getHours() +':'+ times.getMinutes() +':'+ times.getSeconds()

    datos.labels.push(times)
    datos.datasets[0].data.push(newData)
  }

  window.setInterval(fetchData,2000)
  window.setInterval(fetchValue,2000)
  window.setInterval(timeOfRefress(),2000)
  
  return (
    <Grid grow gutter="sm">
      <Grid.Col span={7}>
        <Line data={datos} options={options} />
      </Grid.Col>
      <Grid.Col span={3}>
        <Titulo ta="center" order={2}>Información:</Titulo>
        <Text>%Humedad Actual: {newData}</Text>
        <Text>%Humedad Ideal: 600</Text>
      </Grid.Col>
    </Grid>
  )
}

export default Graph;