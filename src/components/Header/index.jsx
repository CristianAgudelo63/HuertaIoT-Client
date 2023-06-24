import { createStyles, Header, Group, Button, Box, Title, Modal} from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import { FcGoogle } from 'react-icons/fc'

import { Logo } from './Logo';
import Formulario from '../Formulario';

const useStyles = createStyles((theme) => ({
  hiddenMobile: {
    [theme.fn.smallerThan('sm')]: {
      display: 'none',
    },
  },

  hiddenDesktop: {
    [theme.fn.largerThan('sm')]: {
      display: 'none',
    },
  }
}));


const Encabezado = () => {
  const { classes } = useStyles();
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <Box pb={25}>
      <Header height={70} px="lg">
        <Group position="apart" sx={{ height: '100%' }}>

          <Logo size={30} />

          <Title className={classes.hiddenMobile} order={2} color="#212224">Huerta IoT</Title>

          <Group className={classes.hiddenMobile}>
            <Button onClick={open} variant="light" radius="md">Iniciar Sesión</Button>
            
            <Modal centered opened={opened} onClose={close} title="Ingresar Sesión">

              <Formulario />

              {/* <Group position="center" mt="xl">
                <Button position="center" onClick={open} leftIcon={<FcGoogle/>} variant="light" radius="md">Iniciar Sesión con Google</Button>
              </Group> */}
            </Modal>
          </Group>

          <Button className={classes.hiddenDesktop} variant="light" onClick={open} radius="md">Iniciar Sesión</Button>

        </Group>
      </Header>
    </Box>
  );
}

export default Encabezado