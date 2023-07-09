import { Switch as Switches, Tabs} from '@mantine/core';
import Home from '../../pages';

const Switch = () => {
  
  return (
    <>
      <Tabs>
      <Home/>
        <Tabs.Panel value="controls" pt="xs">
          <Switches
            label="Apagar / Encender"
            onLabel="ON" offLabel="OFF"
            description="Activa o desactiva la electroválvula"
            radius="lg"
          />
        </Tabs.Panel>
      </Tabs>
    </>
    
  );
}

export default Switch