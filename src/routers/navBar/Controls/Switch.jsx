import { Switch as Switches, Text, Container, Grid, Divider,  Button, Group } from '@mantine/core';
import { UserAuth } from "../../../context";
import { notifications } from '@mantine/notifications'

const Switch = () => {

  const { user, logOut } = UserAuth();

  const cerrarSesion = async() => {
    try {
      await logOut();
      notifications.show({
        message: 'Error al Iniciar Sesión',
        autoClose: 500,
      });
    } catch (error) {
      console.log('Error al Cerrar Sesión');
      notifications.show({
        message: 'Error al Cerrar Sesión',
        autoClose: 500,
      });
    }
  }
  
  return (
    <>
      <Container>
        <Text c="dimmed" ta="center">
        Si las electroválvulas no se activaron o desactivaron automáticamente, las puede activar y desactivar manualmente desde el interruptor. El valor de la electroválvula es leido de la base de datos.
        </Text>
      </Container>

      <Grid grow justify="center" align="center">
        <Grid.Col span={4}>
          <Switches
            label="Apagar / Encender"
            onLabel="ON" offLabel="OFF"
            description="Activa o desactiva la electroválvula 1"
            radius="lg"
          />
        </Grid.Col>

        <Grid.Col span={4}>
          <Switches
            label="Apagar / Encender"
            onLabel="ON" offLabel="OFF"
            description="Activa o desactiva la electroválvula 2"
            radius="lg"
          />
        </Grid.Col>
      </Grid>

      <Divider my="sm" />

      <Group position="center">
        <Button onClick={cerrarSesion} color="red" radius="md">
          Cerrar Sesión
        </Button>
      </Group>

    </>
  );
}

export default Switch;