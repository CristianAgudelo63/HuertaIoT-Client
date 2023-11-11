import { useState } from "react";
import { TextInput, PasswordInput, Button, Box, Group } from "@mantine/core";
import { useForm } from "@mantine/form";
import { useInputState } from "@mantine/hooks";
import { Notifications, notifications } from "@mantine/notifications";
import { app, auth } from "../../api/firebase.config"
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";


const Form = () => {
  const [stringValue, setStringValue] = useInputState("");
  const [registrado, setRegistrado] = useState(true);

  const form = useForm({
    initialValues: {
      email: "",
      password: "",
    },
  });

  const iniciarSesion = async(e) => {
    e.preventDefault();

    const correo = e.target.email.value;
    const contraseña = e.target.pass.value;

    if(registrado){
      try {
        await signInWithEmailAndPassword(auth, correo, contraseña);
        notifications.show({
          title: "Inicio de Sesión Satisfactorio!",
          message: "Cierra la ventana emergente",
          color: "green",
          autoClose: 5000,
        })
      } catch (error) {
        notifications.show({
          title: "Error",
          message: "Hubo un error al iniciar sesión. Intente nuevamente",
          color: "red",
          autoClose: 5000,
        })
      }
    }
  }

  return (
    <Box maw={400} mx="auto">
      <Notifications />

      <form onSubmit={iniciarSesion}>
        <TextInput
          label="Correo"
          placeholder="correo@correo.com"
          value={stringValue}
          onChange={setStringValue}
          withAsterisk
          id="email"
          {...form.getInputProps("email")}
        />
        <PasswordInput
          placeholder="Contraseña"
          label="Contraseña"
          withAsterisk
          id="pass"
          {...form.getInputProps("password")}
        />

        <Group mt="md" position="center">
          <Button type="submit">Ingresar</Button>
        </Group>
      </form>
    </Box>
  );
};

export default Form;