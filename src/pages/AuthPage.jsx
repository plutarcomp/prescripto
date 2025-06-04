import { useRef, useState } from 'react';
import AuthForm from '../components/AuthForm';

const AuthPage = () => {
  const [esLogin, setEsLogin] = useState(false);
  const formikRef = useRef();

  const handleSwitch = (e) => {
    e.preventDefault();
    setEsLogin((prev) => !prev);
    // Resetear el formulario y touched
    if (formikRef.current) {
      formikRef.current.resetForm();
    }
  };

  return (
    <AuthForm
      title={esLogin ? "Iniciar sesión" : "Crear cuenta"}
      subtitle={esLogin ? "Inicia sesión para reservar una cita" : "Regístrate para reservar una cita"}
      fields={esLogin ? ['email', 'password'] : ['name', 'email', 'password']}
      buttonText={esLogin ? "Entrar" : "Registrarse"}
      footer={{
        text: esLogin ? "¿No tienes una cuenta?" : "¿Ya tienes una cuenta?",
        linkTo: "#",
        linkLabel: esLogin ? "Regístrate" : "Inicia sesión",
        onClick: handleSwitch
      }}
      formikRef={formikRef}
    />
  );
};

export default AuthPage;