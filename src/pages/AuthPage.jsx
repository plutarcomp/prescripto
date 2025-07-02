import { useRef, useState, useEffect } from "react";
import { useSearchParams } from 'react-router-dom';
import AuthForm from "../components/AuthForm";

const AuthPage = () => {
  const [esLogin, setEsLogin] = useState(false); // Estado que cambia entre login y registro
  const formikRef = useRef();
  const [searchParams] = useSearchParams();
  const mode = searchParams.get("mode");

  useEffect(() => {
    if (mode === "login") {
      setEsLogin(true);
    } else {
      setEsLogin(false); // default a 'register' si no está especificado
    }
  }, [mode]);

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
      subtitle={
        esLogin
          ? "Inicia sesión para reservar una cita"
          : "Regístrate para reservar una cita"
      }
      fields={
        esLogin
          ? ["email", "password"]
          : [
              "nombre",
              "apellido_paterno",
              "apellido_materno",
              "email",
              "password",
              "confirmPassword",
              "role_id",
              "phone_number",
            ]
      }
      buttonText={esLogin ? "Entrar" : "Registrarse"}
      footer={{
        text: esLogin ? "¿No tienes una cuenta?" : "¿Ya tienes una cuenta?",
        linkTo: "#",
        linkLabel: esLogin ? "Regístrate" : "Inicia sesión",
        onClick: handleSwitch,
      }}
      formikRef={formikRef}
      setEsLogin={setEsLogin} // Pasar la función setEsLogin como prop
      esLogin={esLogin}
    />
  );
};

export default AuthPage;
