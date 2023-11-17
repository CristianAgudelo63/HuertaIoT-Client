import { MantineProvider, Box, createStyles } from "@mantine/core";
import { AuthContextProvider } from './context'

import Head from "./components/Header";
import { Rutas } from "./routers"

const useStyles = createStyles(() => ({
  background: {
    backgroundImage: "url(/bg.jpg)",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    height: "100vh",
  },
}));

const App = () => {
  const { classes } = useStyles();

  return (
    <MantineProvider withGlobalStyles withNormalizeCSS theme={{ fontFamily: "Montserrat" }}>
      <AuthContextProvider>
        <Box className={classes.background}>
          <Head />
          <Rutas />
        </Box>
      </AuthContextProvider>
    </MantineProvider>
  );
};

export default App;
