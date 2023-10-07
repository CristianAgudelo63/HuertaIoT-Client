import { Switch as Switches, Container, Text, Grid, Divider, createStyles } from '@mantine/core';

const useStyles = createStyles((theme) => ({
  description: {
    textAlign: 'center',

    [theme.fn.smallerThan('xs')]: {
      textAlign: 'left',
      fontSize: theme.fontSizes.md,
    },
  },
}));

const Controls = () => {

  const { classes } = useStyles();
  
  return (
    <>
    <Container>
      <Text ta="center">
      Si las electroválvulas no se activaron o desactivaron automáticamente, las puede activar y desactivar manualmente desde el interruptor. El valor de la electroválvula es leido de la base de datos.
      </Text>
    </Container>

    <Divider my="sm" />

    {/* <Container p={0} size={600}>
      <Text size="lg" color="dimmed" className={classes.description}>
        Necesitas Iniciar Sesión para acceder a los controles de las electroválvulas.
      </Text>
    </Container> */}


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

    </>
  );
}

export default Controls