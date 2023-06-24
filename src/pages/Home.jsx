import { Container, createStyles, Box } from '@mantine/core'
import Navegacion from './../components/NavBar'

const useStyles = createStyles((theme) => ({
  contenedor: {
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
    padding: theme.spacing.xl,
    borderRadius: theme.radius.md,
    width: "100%",
  }
}));

const Home = () =>{

  const { classes } = useStyles()

  return(
    <Box component='main'>
      <Container className={classes.contenedor}>
        <Navegacion/>
      </Container>
    </Box>
  )
} 

export default Home
