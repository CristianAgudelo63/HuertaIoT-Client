import { Group, ActionIcon, rem, createStyles, Text } from '@mantine/core';
import { FaGithub, FaWix } from "react-icons/fa";
import { SiArduino } from "react-icons/si";
import { Logo } from './Logo';

const useStyles = createStyles((theme) => ({
  footer: {
    backgroundColor:
      theme.colorScheme === "dark"
        ? theme.colors.dark[6]
        : theme.colors.gray[0],
    marginTop: 'auto',
  },
  
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '5px 20px',
    [theme.fn.smallerThan("sm")]: {
      display: 'flex',
      flexDirection: 'column',
      gap: '10px'
    },
  },

  icons: {
    gap: "xs",
    justify: "flex-end",
    wrap: "nowrap",
  },
  
}));


const Footer = () => {
  const { classes } = useStyles();

  return (
    <div className={classes.footer}>
      <div className={classes.container}>
        <Logo/>

        <Text c="dimmed">Open Source Proyect</Text>

        <Group className={classes.icons}>

          <a target='_blank' href='https://github.com/CristianAgudelo63/HuertaIoT-Client'>
            <ActionIcon size="lg" variant="default" radius="xl">
              <FaGithub style={{ width: rem(18), height: rem(18) }} stroke={1.5}/>
            </ActionIcon>
          </a>

          <a target='_blank' href='https://github.com/CristianAgudelo63/HuertaIoT'>
            <ActionIcon size="lg" variant="default" radius="xl">
              <SiArduino style={{ width: rem(18), height: rem(18) }} stroke={1.5}/>
            </ActionIcon>
          </a>

          <a target='_blank' href='https://cristiangudelo63.wixsite.com/huertaiot'>
            <ActionIcon size="lg" variant="default" radius="xl">
              <FaWix style={{ width: rem(18), height: rem(18) }} stroke={1.5}/>
            </ActionIcon>  
          </a>

        </Group>
      </div>
    </div>
  );
}

export default Footer;