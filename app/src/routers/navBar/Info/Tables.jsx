import { useState, useEffect } from "react";
import { Title as Titulo, Table } from "@mantine/core";

import { firebase } from "../../../api/axiosAPI";

const Tables = () => {
  const [data, setData] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const res = await firebase.get(`/HUMEDAD.json`)
      setData(res.data);
    } catch (error) {
      console.error("Error al obtener los datos:", error);
    }
  };
  
  const porcentaje = () => (data*100)/1023

  const info = () => {
    if (data >= 500 <= 1023) {
      return 'Humedo'
    } else {
      return 'Seco'
    }
  }

  const elements = [
    { info: "Sensor de Humedad", status: data },
    { info: "Humedad (%)", status: porcentaje().toFixed(2) },
    { info: "Terreno", status: info() },
  ];

  const rows = elements.map((element) => (
    <tr key={element.name}>
      <td>{element.info}</td>
      <td>{element.status}</td>
    </tr>
  ));

  window.setInterval(fetchData, 2000);

  return (
    <>
     <Titulo ta="center" order={2}>Información:</Titulo>
      <Table striped highlightOnHover withColumnBorders>
        <thead>
          <tr>
            <th>Parámetro</th>
            <th>Valor</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </Table>
    </>
  );
};

export default Tables;
