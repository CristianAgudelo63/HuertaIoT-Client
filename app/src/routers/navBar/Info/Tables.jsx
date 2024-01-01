import { useState, useEffect } from "react";
import { Title as Titulo, Table, ScrollArea } from "@mantine/core";

import { firebase } from "../../../api/axiosAPI";

const Tables = () => {
  const [data, setData] = useState("");
  const [electrovalvula, setElectrovalvula] = useState("");
  const [ph, setPh] = useState(0);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const res1 = await firebase.get(`/HUMEDAD.json`)
      const res2 = await firebase.get(`/Ph.json`)
      const res3 = await firebase.get(`/ELECTROVALVULA_1.json`)

      setData(res1.data);
      setPh(res2.data);
      setElectrovalvula(res3.data);
    } catch (error) {
      console.error("Error al obtener los datos:", error);
    }
  };
  
  const porcentaje = () => (data*100)/1023

  const Terreno = () => {
    if (data >= 500 <= 1023) {
      return 'Humedo'
    } else {
      return 'Seco'
    }
  }

  const elements = [
    { info: "Sensor de Humedad", status: data },
    { info: "Humedad (%)", status: porcentaje().toFixed(2) },
    { info: "Estado del Terreno", status: Terreno() },
    { info: "Escala de Ph", status: ph },
    { info: "Electroválvula", status: electrovalvula },
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
      
      <ScrollArea h={250} scrollbarSize={6}>
        <Table striped highlightOnHover withColumnBorders>
        <thead>
          <tr>
            <th>Parámetro</th>
            <th>Valor</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
        </Table>
      </ScrollArea>
    </>
  );
};

export default Tables;
