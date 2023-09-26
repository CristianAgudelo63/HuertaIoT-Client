import { Switch as Switches, Container, Text, createStyles } from '@mantine/core';

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

    {/* <Container p={0} size={600}>
      <Text size="lg" color="dimmed" className={classes.description}>
        Necesitas Iniciar Sesión para acceder a los controles de configuración
      </Text>
    </Container> */}

    <Switches
      label="Apagar / Encender"
      onLabel="ON" offLabel="OFF"
      description="Activa o desactiva la electroválvula"
      radius="lg"
    />

    </>
  );
}

export default Controls