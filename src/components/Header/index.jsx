import { createStyles, Header, Group, Button, Box, Title } from "@mantine/core";
import { Logo } from "./Logo";
import { UserAuth } from "../../context";
import { notifications } from '@mantine/notifications'
import { FcGoogle } from 'react-icons/fc'

const useStyles = createStyles((theme) => ({
  hiddenMobile: {
    [theme.fn.smallerThan("sm")]: {
      display: "none",
    },
  },

  hiddenDesktop: {
    [theme.fn.largerThan("sm")]: {
      display: "none",
    },
  },
}));

const Head = () => {
  const { classes } = useStyles();
  const { googleSignIn, user, logOut } = UserAuth();

  const iniciarSesion = async() => {
    try {
      await googleSignIn();
    } catch (error) {
      console.log('Error al Iniciar Sesión');
      notifications.show({
        message: 'Error al Iniciar Sesión',
        autoClose: 500,
      });
    }
  }

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
    <Box pb={25}>
      <Header height={70} px="lg">
        <Group position="apart" sx={{ height: "100%" }}>
          <Logo size={30} />

          <Title className={classes.hiddenMobile} order={2} color="#212224">
            Huerta IoT FESA
          </Title>

          <Group className={classes.hiddenMobile}>
            <Button leftIcon={<FcGoogle />} onClick={iniciarSesion} variant="light" radius="md">
              Iniciar Sesión
            </Button>
          </Group>

          <Button leftIcon={<FcGoogle />} className={classes.hiddenDesktop} variant="light" onClick={iniciarSesion} radius="md">
            Iniciar Sesión
          </Button>
        </Group>
      </Header>
    </Box>
  );
};

export default Head;
