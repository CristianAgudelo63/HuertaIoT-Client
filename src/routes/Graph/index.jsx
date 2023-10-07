import { useState, useEffect } from "react";
import { Grid, Title as Titulo, Table } from "@mantine/core";
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

import { firebaseHumedad, firebaseElectrovalvula1, firebaseElectrovalvula2 } from "../../api/axiosAPI";

const Graph = () => {
  const [data, setData] = useState("");
  const [value1, setValue1] = useState("");
  const [value2, setValue2] = useState("");

  const newData = [data];
  const electrovavula1 = [value1];
  const electrovavula2 = [value2];

  useEffect(() => {
    fetchData();
    fetchElectrovalvula1()
    fetchElectrovalvula2()
  }, []);

  const fetchData = async () => {
    try {
      const res = await firebaseHumedad.get(`/HUMEDAD.json`)
      setData(res.data);
    } catch (error) {
      console.error("Error al obtener los datos:", error);
    }
  };

  const fetchElectrovalvula1 = async () => {
    try {
      const res = await firebaseElectrovalvula1.get(`/ELECTROVALVULA_1.json`)
      setValue1(res.data);
    } catch (error) {
      console.error("Error al obtener los datos:", error);
    }
  };

  const fetchElectrovalvula2 = async () => {
    try {
      const res = await firebaseElectrovalvula2.get(`/ELECTROVALVULA_2.json`)
      setValue2(res.data);
    } catch (error) {
      console.error("Error al obtener los datos:", error);
    }
  };

  const elements = [
    { info: "%Humedad", status: newData },
    { info: "Electroválvula 1", status: electrovavula1 },
    { info: "Electroválvula 2", status: electrovavula2 },
  ];

  const rows = elements.map((element) => (
    <tr key={element.name}>
      <td>{element.info}</td>
      <td>{element.status}</td>
    </tr>
  ));
  
  const datos = {
    labels: [0],
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
    let times = new Date();
    times = `${times.getHours()}:${times.getMinutes()}:${times.getSeconds()}`;

    datos.labels.push(times);
    datos.datasets[0].data.push(newData);
  };

  window.setInterval(fetchData, 5000);
  window.setInterval(refress(), 5000);

  return (
    <Grid grow gutter="sm">
      <Grid.Col span={7}>
        <Line data={datos} options={options} />
      </Grid.Col>
      <Grid.Col span={3}>
        <Titulo ta="center" order={2}>
          Información:
        </Titulo>
        <Table striped highlightOnHover withColumnBorders>
          <thead>
            <tr>
              <th>Parámetro</th>
              <th>Lectura</th>
            </tr>
          </thead>
          <tbody>{rows}</tbody>
        </Table>
      </Grid.Col>
    </Grid>
  );
};

export default Graph;
