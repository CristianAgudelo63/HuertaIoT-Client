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

const limite = [600,600,600,600,600,600,600,600,600,600];
let datos = [100, 569, 200, 360, 800, 400, 300, 200, 25, 305];
let tiempo = [0,10,20,30,40,50,60,70,80,90];

const data = {
  labels: tiempo,
  datasets: [
    // Cada una de las líneas del gráfico
    {
      label: "Humedad en el suelo",
      data: datos,
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
      data: limite,
      fill: false,
      borderColor: 'rgba(255,0,0,.5)'
    }
  ],
};

const options = {
  scales: {
    y: {
      min: 0,
      max: 1024,
    }
  },
};

export default function Graph() {
  return <Line data={data} options={options} />;
}
