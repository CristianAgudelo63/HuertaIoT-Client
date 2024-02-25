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

import { firebase } from "../../../api/axiosAPI";

const Graph = () => {
  const [data, setData] = useState("");
<<<<<<< HEAD
  const [data2, setData2] = useState("");
  const [data3, setData3] = useState("");
  const [data4, setData4] = useState("");
  const [data5, setData5] = useState("");
=======
  // const [data2, setData2] = useState("");
  // const [data3, setData3] = useState("");
  // const [data4, setData4] = useState("");
  // const [data5, setData5] = useState("");
>>>>>>> 71575f1 (docs: :memo: Updated documentation)

  const [time, setTime] = useState("");
  const [time2, setTime2] = useState("");
  const [time3, setTime3] = useState("");
  const [time4, setTime4] = useState("");
  const [time5, setTime5] = useState("");

  useEffect(() => {
    fetchData();
    fetchTime();
  }, [])

  const fetchData = async () => {
    try {
      let res = await firebase.get(`/HUMEDAD1.json`)
<<<<<<< HEAD
      let res2 = await firebase.get(`/HUMEDAD2.json`)
      let res3 = await firebase.get(`/HUMEDAD3.json`)
      let res4 = await firebase.get(`/HUMEDAD4.json`)
      let res5 = await firebase.get(`/HUMEDAD5.json`)

      setData(res.data);
      setData2(res2.data);
      setData3(res3.data);
      setData4(res4.data);
      setData5(res5.data);
=======
      // let res2 = await firebase.get(`/HUMEDAD2.json`)
      // let res3 = await firebase.get(`/HUMEDAD3.json`)
      // let res4 = await firebase.get(`/HUMEDAD4.json`)
      // let res5 = await firebase.get(`/HUMEDAD5.json`)

      setData(res.data);
      // setData2(res2.data);
      // setData3(res3.data);
      // setData4(res4.data);
      // setData5(res5.data);
>>>>>>> 71575f1 (docs: :memo: Updated documentation)
    } catch (error) {
      console.error("Error al obtener los datos:", error);
    }
  };

<<<<<<< HEAD
=======
  setTimeout(fetchData, 5000)

>>>>>>> 71575f1 (docs: :memo: Updated documentation)
  const fetchTime = async () => {
    try {
      let res = await firebase.get(`/FECHAYHORA.json`)
      let res2 = await firebase.get(`/FECHAYHORA2.json`)
      let res3 = await firebase.get(`/FECHAYHORA3.json`)
      let res4 = await firebase.get(`/FECHAYHORA4.json`)
      let res5 = await firebase.get(`/FECHAYHORA5.json`)

      setTime(res.data);
      setTime2(res2.data);
      setTime3(res3.data);
      setTime4(res4.data);
      setTime5(res5.data);
    } catch (error) {
      console.error("Error al obtener los datos:", error);
    }
  };

  const datos = {
    labels: [time, time2, time3, time4, time5],
    datasets: [
      {
        label: "Humedad Del Terreno",
        data: [data, data2, data3, data4, data5],
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

<<<<<<< HEAD
  window.setInterval(fetchData, 5000);
  window.setInterval(fetchTime, 5000);
=======
  window.setInterval(fetchData, 2000);
  window.setInterval(fetchTime, 2000);
>>>>>>> 71575f1 (docs: :memo: Updated documentation)

  return (
    <Line data={datos} options={options} />
  )
};

export default Graph;
