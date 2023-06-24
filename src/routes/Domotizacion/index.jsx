import { Switch } from '@mantine/core';

const Deslizar = () => {
  return (
    <Switch
      label="Apagar / Encender"
      onLabel="ON" offLabel="OFF"
      description="Activa o desactiva la electroválvula"
      radius="lg"
    />
  );
}

export default Deslizar