import { MantineProvider, Box, createStyles} from '@mantine/core';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Encabezado from './components/Header'
import Home from './pages/Home'
import Page404 from './pages/Page404'

const useStyles = createStyles(() => ({
  fondo: {
    backgroundImage: 'url(/bg.jpg)',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    height: '100vh'
  }
}));

const App = () => {

  const { classes } = useStyles();

  return (
    <MantineProvider withGlobalStyles withNormalizeCSS theme={{ fontFamily: 'Montserrat' }}>
      <Box className={classes.fondo}>
        <Encabezado/>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='*' element={<Page404 />} />
          </Routes>
        </BrowserRouter>
      </Box>
    </MantineProvider>  
  )
}

export default App