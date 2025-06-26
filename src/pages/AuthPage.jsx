import { useRef, useState, useEffect } from 'react';
import AuthForm from '../components/AuthForm';

const AuthPage = () => {
  const [esLogin, setEsLogin] = useState(false);  // Estado que cambia entre login y registro
  const formikRef = useRef();

  useEffect(() => {
    const storedLoginState = localStorage.getItem('isLogin');
    if (storedLoginState) {
      setEsLogin(true); // Establecer el estado de esLogin desde localStorage si existe
    }
  }, []);

  const handleSwitch = (e) => {
    e.preventDefault();
    setEsLogin((prev) => !prev);
    if (formikRef.current) {
      formikRef.current.resetForm();
    }
  };

  return (
    <AuthForm
      title={esLogin ? "Iniciar sesión" : "Crear cuenta"}
      subtitle={esLogin ? "Inicia sesión para reservar una cita" : "Regístrate para reservar una cita"}
      fields={esLogin ? ['email', 'password'] : ['nombre', 'apellido_paterno', 'apellido_materno', 'email', 'password', 'confirmPassword', 'role_id', 'phone_number']}
      buttonText={esLogin ? "Entrar" : "Registrarse"}
      footer={{
        text: esLogin ? "¿No tienes una cuenta?" : "¿Ya tienes una cuenta?",
        linkTo: "#",
        linkLabel: esLogin ? "Regístrate" : "Inicia sesión",
        onClick: handleSwitch
      }}
      formikRef={formikRef}
      setEsLogin={setEsLogin} // Pasar la función setEsLogin como prop
      esLogin={esLogin}
    />
  );
};

export default AuthPage;
