import React, { useState, useEffect } from 'react';
import { Switch } from '@mantine/core';
import { firebase } from '../../../api/axiosAPI';

const InterruptorConFirebase = () => {
  const [activado, setActivado] = useState(false);

  useEffect(() => {
    fetchData();
  }, [])

  const setData = async () => {
    try {
      let ref = await firebase.ref(`/inter.json`)

      // Envía el estado del interruptor a Firebase
      ref.set({
        interruptor: estado
      });

      setData(res.data);

    } catch (error) {
      console.error("Error al obtener los datos:", error);
    }
  };

    // Referencia a tu base de datos de Firebase
  var database = firebase.database();

  function enviarEstadoInterruptor(estado) {
    // Referencia al nodo donde quieres guardar el estado del interruptor
    var ref = database.ref('ruta/al/nodo');

    // Envía el estado del interruptor a Firebase
    ref.set({
      interruptor: estado
    });
  }


  const handleToggle = (event) => {
    const nuevoEstado = event.target.checked;
    setActivado(nuevoEstado);

    // Envía el nuevo estado a Firebase
    database.ref('ruta/al/nodo').set({ interruptor: nuevoEstado });
  };

  return (
    <Switch
      checked={activado}
      onChange={handleToggle}
      label={activado ? 'Activado' : 'Desactivado'}
    />
  );
}

export default InterruptorConFirebase;