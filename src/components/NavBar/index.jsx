import { Tabs, Text, createStyles, Grid  } from '@mantine/core'
import { BsGraphUp } from 'react-icons/bs'
import { WiDayCloudyGusts } from 'react-icons/wi';
import { LuSettings2 } from 'react-icons/lu';

import Page404 from './../../pages/Page404'

import Deslizar from './../../routes/Domotizacion'
import Grafica from './../../routes/Grafica'
import Clima from './../../routes/Clima'

const useStyles = createStyles((theme) => ({
  hiddenMobile: {
    [theme.fn.smallerThan('sm')]: {
      display: 'none',
    },
  }
}));

const Navegacion = () => {

  const { classes } = useStyles()

  return (
    <Tabs defaultValue="grafica">
      <Tabs.List grow>
        <Tabs.Tab value="grafica" icon={<BsGraphUp/>}>
          <Text className={classes.hiddenMobile}>Gráfica</Text>
        </Tabs.Tab>
        <Tabs.Tab value="clima" icon={<WiDayCloudyGusts/>}>
          <Text className={classes.hiddenMobile}>Clima</Text>
        </Tabs.Tab>
        <Tabs.Tab value="configuracion" icon={<LuSettings2 />}>
          <Text className={classes.hiddenMobile}>Domotización</Text>
        </Tabs.Tab>
      </Tabs.List>

      <Tabs.Panel value="grafica" pt="xs">
        <Grafica/>
      </Tabs.Panel>

      <Tabs.Panel value="clima" pt="xs">
        <Clima/>
      </Tabs.Panel>

       <Tabs.Panel value="configuracion" pt="xs">
          <Grid grow gutter="xs">
            <Grid.Col span={4}><Deslizar/></Grid.Col>
            <Grid.Col span={4}><Deslizar/></Grid.Col>
          </Grid>
          <Grid grow gutter="xs">
            <Grid.Col span={4}><Deslizar/></Grid.Col>
            <Grid.Col span={4}><Deslizar/></Grid.Col>
          </Grid>
        </Tabs.Panel>

    </Tabs>
  );
}

export default Navegacion