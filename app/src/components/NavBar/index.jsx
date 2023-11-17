import { Tabs, Text, createStyles } from "@mantine/core";

import { BsGraphUp } from "react-icons/bs";
import { WiDayCloudyGusts } from "react-icons/wi";
import { LuSettings2 } from "react-icons/lu";

import Info from "./../../routers/navBar/Info";
import Weather from "./../../routers/navBar/Weather";
import Controls from "./../../routers/navBar/Controls";

const useStyles = createStyles((theme) => ({
  hiddenMobile: {
    [theme.fn.smallerThan("sm")]: {
      display: "none",
    },
  },
}));

const NavBar = () => {
  const { classes } = useStyles();

  return (
    <Tabs keepMounted={true} defaultValue="info">
      <Tabs.List grow>
        <Tabs.Tab value="info" icon={<BsGraphUp size={22} />}>
          <Text className={classes.hiddenMobile}>Monitoreo</Text>
        </Tabs.Tab>
        <Tabs.Tab value="weather" icon={<WiDayCloudyGusts size={22} />}>
          <Text className={classes.hiddenMobile}>Clima Ambiental</Text>
        </Tabs.Tab>
        <Tabs.Tab value="controls" icon={<LuSettings2 size={22} />}>
          <Text className={classes.hiddenMobile}>Controles</Text>
        </Tabs.Tab>
      </Tabs.List>

      <Tabs.Panel value="info" pt="xs">
        <Info />
      </Tabs.Panel>

      <Tabs.Panel value="weather" pt="xs">
        <Weather />
      </Tabs.Panel>

      <Tabs.Panel value="controls" pt="xs">
        <Controls />
      </Tabs.Panel>
    </Tabs>
  );
};

export default NavBar;
