import {
  createStyles,
  Header,
  Group,
  Button,
  Box,
  Title,
  Modal,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { Logo } from "./Logo";
import Form from "./form";

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
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <Box pb={25}>
      <Header height={70} px="lg">
        <Group position="apart" sx={{ height: "100%" }}>
          <Logo size={30} />

          <Title className={classes.hiddenMobile} order={2} color="#212224">
            Huerta IoT FESA
          </Title>

          <Group>
            <Button onClick={open} variant="light" radius="md">
              Iniciar Sesión
            </Button>
            <Modal
              centered
              opened={opened}
              onClose={close}
              title="Ingresar Sesión"
            >
              <Form />
            </Modal>
          </Group>

        </Group>
      </Header>
    </Box>
  );
};

export default Head;