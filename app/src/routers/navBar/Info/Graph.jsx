import { useState, useEffect } from "react";
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

import { firebaseHumedad } from "../../../api/axiosAPI";

const Graph = () => {
  const [data, setData] = useState("");
  const newData = [data,data];
  
  let time = new Date();
  time = `${time.getHours()}:${time.getMinutes()}:${time.getSeconds()}`;
  const times = [time,time]

  useEffect(() => {
    fetchData();
  }, [])

  const fetchData = async () => {
    try {
      const res = await firebaseHumedad.get(`/HUMEDAD.json`)
      setData(res.data);
    } catch (error) {
      console.error("Error al obtener los datos:", error);
    }
  };

  const datos = {
    labels: times,
    datasets: [
      {
        label: "Humedad Del Terreno",
        data: newData,
        tension: 0.5,
        fill: true,
        borderColor: "rgb(34, 139, 230)",
        backgroundColor: "rgba(34, 139, 230, .5)",
        pointRadius: 5,
        pointBorderColor: "rgb(34, 139, 230)",
        pointBackgroundColor: "rgb(34, 139, 230)",
      },
    ],
  };

  const options = {
    scales: {
      y: {
        min: 0,
        max: 1023,
      },
    },
  };

  const refress = () => {
    datos.datasets[0].data.push(data);
  };


  window.setInterval(fetchData, 5000);
  window.setInterval(refress(), 5000);

  return (
    <Line data={datos} options={options} />
  )
};

export default Graph;
