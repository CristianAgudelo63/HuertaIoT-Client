import { MantineProvider, Box, createStyles } from '@mantine/core';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Head from './components/Header'
import Main from './pages/Main'
import Page404 from './pages/Page404'

const useStyles = createStyles(() => ({
  background: {
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
      <Box className={classes.background}>
        <Head/>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Main />} />
            <Route path='*' element={<Page404 />} />
          </Routes>
        </BrowserRouter>
      </Box>
    </MantineProvider>  
  )
}

export default App