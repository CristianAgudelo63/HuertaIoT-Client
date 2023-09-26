import { Container, createStyles, Box } from '@mantine/core'
import NavBar from '../components/NavBar'

const useStyles = createStyles((theme) => ({
  container: {
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
    padding: theme.spacing.xl,
    borderRadius: theme.radius.md,
    width: "100%",
  }
}));

const Main = () =>{

  const { classes } = useStyles()

  return(
    <Box component='main'>
      <Container className={classes.container}>
        <NavBar/>
      </Container>
    </Box>
  )
} 

export default Main
