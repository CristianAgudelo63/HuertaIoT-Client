import { Tabs, Text, createStyles, Grid  } from '@mantine/core'
import { BsGraphUp } from 'react-icons/bs'
import { WiDayCloudyGusts } from 'react-icons/wi';
import { LuSettings2 } from 'react-icons/lu';

import Graph from './../../routes/Graph'

const useStyles = createStyles((theme) => ({
  hiddenMobile: {
    [theme.fn.smallerThan('sm')]: {
      display: 'none',
    },
  }
}));

const NavBar = () => {

  const { classes } = useStyles()

  return (
    <Tabs keepMounted={true} defaultValue="graph">
      <Tabs.List grow>
        <Tabs.Tab value="graph" icon={<BsGraphUp size={14}/>}>
          <Text className={classes.hiddenMobile}>Gráfica</Text>
        </Tabs.Tab>
        <Tabs.Tab value="weather" icon={<WiDayCloudyGusts size={14}/>}>
          <Text className={classes.hiddenMobile}>Clima</Text>
        </Tabs.Tab>
        <Tabs.Tab value="controls" icon={<LuSettings2 size={14}/>}>
          <Text className={classes.hiddenMobile}>Controles</Text>
        </Tabs.Tab>
      </Tabs.List>

      <Tabs.Panel value='graph'>
        <Graph />
      </Tabs.Panel>
    </Tabs>
  );
}

export default NavBar