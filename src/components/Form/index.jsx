import { useState } from 'react'
import { TextInput, PasswordInput, Button, Box, Group } from '@mantine/core'
import { useForm } from '@mantine/form'
import { useInputState } from '@mantine/hooks'
import { Notifications, notifications } from '@mantine/notifications';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { app } from '../../services/firebase.config';

const Form = () => {
  
  const [stringValue, setStringValue] = useInputState('');
  const [error, setError] = useState('')

  const form = useForm({
    initialValues: {
      email: '',
      password: '',
    }
  }); 

  const auth = getAuth(app)
  const user = auth.currentUser

  const handleSubmit = async () => {
    await createUserWithEmailAndPassword()
    .then((user) => {
      if (user !== null) {
        console.log(user)
      }
      
    })
    .catch((error) => {
      error = error.message;
    });
  };

  return (
    <Box maw={400} mx="auto">
      <Notifications />

      {error && notifications.show(
        {
          title: "Error",
          message: "Hubo un error",
          color: 'red',
          autoClose: 5000
        })
      }

      <form onSubmit={form.onSubmit(() => handleSubmit())}> 
        <TextInput
          label="Correo"
          placeholder="correo@correo.com"
          value={stringValue} onChange={setStringValue}
          withAsterisk
          {...form.getInputProps('email')}
        />
        <PasswordInput
          placeholder="Contraseña"
          label="Contraseña"
          withAsterisk
          {...form.getInputProps('password')}
        />

        <Group mt="md" position="center">
          <Button type="submit">
            Ingresar
          </Button>
        </Group>
      </form>
    </Box>
  );
}

export default Form