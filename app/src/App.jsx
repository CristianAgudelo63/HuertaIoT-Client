import { AuthContextProvider } from './context'
import { createStyles, Box } from "@mantine/core";

import Head from "./components/Header";
import Footer from "./components/Footer";
import Rutas from "./routers";

const useStyles = createStyles((theme) => ({
  background: {
    backgroundImage: "url(/bg.jpg)",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    height: "100vh",
    display: 'flex',
    flexDirection: 'column'
  },
}));

const App = () => {
  const { classes } = useStyles();

  return (
    <AuthContextProvider>
      <Box className={classes.background}>
        <Head />
        <Rutas />
        <Footer/>
      </Box>
    </AuthContextProvider>
  );
};

export default App;