import { useState, useContext } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../pages/AuthContext";

const AuthForm = ({
  title,
  subtitle,
  fields,
  buttonText,
  footer,
  formikRef,
  setEsLogin,
  esLogin,
}) => {
  const [verPassword, setVerPassword] = useState(false);
  const [loading, setLoading] = useState(false); // Para manejar el estado de carga
  const [error, setError] = useState(""); // Para manejar errores
  const backendUrl = import.meta.env.VITE_API_BACKEND_URL;
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();
  const { login } = useContext(AuthContext); //Importamos la función para almacenar datos del Login

  // Esquema de validación con Yup
  const validationSchema = Yup.object({
    ...(fields.includes("nombre") && {
      nombre: Yup.string()
        .matches(
          /^[A-Za-zÁÉÍÓÚáéíóúÑñ]+(\s[A-Za-zÁÉÍÓÚáéíóúÑñ]+)?$/,
          "Escribe tu nombre o nombres"
        )
        .required("El nombre es obligatorio"),
    }),
    ...(fields.includes("apellido_paterno") && {
      apellido_paterno: Yup.string()
        .matches(/^[A-Za-zÁÉÍÓÚáéíóúÑñ]+$/, "Apellido paterno inválido")
        .required("El apellido paterno es obligatorio"),
    }),
    ...(fields.includes("apellido_materno") && {
      apellido_materno: Yup.string()
        .matches(/^[A-Za-zÁÉÍÓÚáéíóúÑñ]+$/, "Apellido materno inválido")
        .required("El apellido materno es obligatorio"),
    }),
    email: Yup.string()
      .email("Correo electrónico inválido")
      .required("El correo es obligatorio"),
    password: Yup.string()
      .min(8, "La contraseña debe tener al menos 8 caracteres")
      .matches(/[A-Z]/, "Debe contener al menos una mayúscula")
      .matches(/\d/, "Debe contener al menos un número")
      .matches(
        /[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/,
        "Debe contener al menos un carácter especial"
      )
      .required("La contraseña es obligatoria"),
    ...(fields.includes("confirmPassword") &&
      !esLogin && {
        confirmPassword: Yup.string()
          .oneOf(
            [Yup.ref("password"), null],
            "Las contraseñas no coinciden, favor de verificar"
          )
          .required("La confirmación de la contraseña es obligatoria"),
      }),
    ...(fields.includes("role_id") && {
      role_id: Yup.string().required("El rol es obligatorio"),
    }),
    ...(fields.includes("phone_number") && {
      phone_number: Yup.string()
        .matches(/^\d+$/, "El número de teléfono debe ser numérico")
        .required("El número de teléfono es obligatorio"),
    }),
  });

  // Valores iniciales dinámicos
  const initialValues = {
    ...(fields.includes("nombre") && { nombre: "" }),
    ...(fields.includes("apellido_paterno") && { apellido_paterno: "" }),
    ...(fields.includes("apellido_materno") && { apellido_materno: "" }),
    email: "",
    password: "",
    confirmPassword: "", // Agregar confirmación de contraseña
    ...(fields.includes("role_id") && { role_id: "2" }), // Role oculto con valor 2
    ...(fields.includes("phone_number") && { phone_number: "" }),
  };

  const handleSubmit = async (values) => {
    setLoading(true); // Activar estado de carga
    setError(""); // Limpiar cualquier error anterior

    const backendUrl = import.meta.env.VITE_API_BACKEND_URL;
    console.log("values", values);
    if (esLogin) {
      // Recibir los datos del Login
      const response = await axios
        .post(`${backendUrl}/api/auth/login`, {
          email: values.email,
          password: values.password,
        })
        .then((response) => {
          console.log("Datos del user", response);
          if (response.status === 200) {
            console.log("User fetched successfully:", response.data);
            login(response.data.user);
            navigate("/");
          } else if (response.status === 404) {
            console.error("No user found");
            throw new Error("No user found");
          }
        })
        .catch((error) => {
          console.error("Error fetching doctors:", error);
          setError("Error fetching doctos");
        });
      return response;
    } else {
      try {
        // Enviar los datos a la API de registro
        const response = await axios.post(`${backendUrl}/api/auth/register`, {
          email: values.email,
          password: values.password,
          first_name: values.nombre,
          last_name: values.apellido_paterno,
          role_id: 2, // Valor fijo para el rol (por ejemplo, "2" para el rol de usuario)
          phone_number: values.phone_number,
        });

        // Si la respuesta es exitosa, mostramos el modal de éxito
        setShowModal(true);
      } catch (err) {
        // Depurar el error en la consola para ver cómo está estructurado
        console.error("Error al registrar: ", err.response);

        // Verificar si el error es un error 400
        if (err.response && err.response.status === 400) {
          console.log("Detalles del error 400:", err.response.data);

          // Acceder directamente a 'mensaje' en la respuesta del error
          if (err.response.data && err.response.data.mensaje) {
            setError(err.response.data.mensaje); // Mostrar el mensaje del backend (correo ya registrado)
          } else {
            setError("Hubo un error al registrar. Intenta nuevamente.");
          }
        } else {
          setError("Hubo un error al registrar. Intenta nuevamente.");
        }
      }
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-4">
      <Formik
        innerRef={formikRef}
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
        validateOnBlur={true}
        validateOnChange={false}
      >
        {({ values, touched, errors }) => (
          <Form className="flex justify-center flex-col gap-3 m-auto items-start p-8 min-w-[340px] sm:min-w-96 border rounded-xl text-[#5E5E5E] text-sm shadow-lg">
            <h1 className="text-2xl font-semibold text-[#232323]">{title}</h1>
            <p className="text-sm text-gray-500 mb-2">{subtitle}</p>

            {/* Nombre */}
            {fields.includes("nombre") && (
              <>
                <label htmlFor="nombre">Nombre</label>
                <Field
                  name="nombre"
                  type="text"
                  className="border border-[#DADADA] rounded w-full p-2 mt-1"
                />
                <ErrorMessage
                  name="nombre"
                  component="span"
                  className="text-red-500 text-xs"
                />
                {touched.nombre && errors.nombre && (
                  <ul className="mb-2 ml-2 text-xs">
                    <li className="text-red-500">
                      • Escribe tu nombre o nombres
                    </li>
                  </ul>
                )}
              </>
            )}

            {/* Apellido Paterno */}
            {fields.includes("apellido_paterno") && (
              <>
                <label htmlFor="apellido_paterno">Apellido Paterno</label>
                <Field
                  name="apellido_paterno"
                  type="text"
                  className="border border-[#DADADA] rounded w-full p-2 mt-1"
                />
                <ErrorMessage
                  name="apellido_paterno"
                  component="span"
                  className="text-red-500 text-xs"
                />
                {touched.apellido_paterno && errors.apellido_paterno && (
                  <ul className="mb-2 ml-2 text-xs">
                    <li className="text-red-500">
                      • Escribe tu apellido paterno
                    </li>
                  </ul>
                )}
              </>
            )}

            {/* Apellido Materno */}
            {fields.includes("apellido_materno") && (
              <>
                <label htmlFor="apellido_materno">Apellido Materno</label>
                <Field
                  name="apellido_materno"
                  type="text"
                  className="border border-[#DADADA] rounded w-full p-2 mt-1"
                />
                <ErrorMessage
                  name="apellido_materno"
                  component="span"
                  className="text-red-500 text-xs"
                />
                {touched.apellido_materno && errors.apellido_materno && (
                  <ul className="mb-2 ml-2 text-xs">
                    <li className="text-red-500">
                      • Escribe tu apellido materno
                    </li>
                  </ul>
                )}
              </>
            )}

            {/* Correo */}
            <label htmlFor="email">Correo</label>
            <Field
              name="email"
              type="email"
              className="border border-[#DADADA] rounded w-full p-2 mt-1"
            />
            <ErrorMessage
              name="email"
              component="span"
              className="text-red-500 text-xs"
            />

            {/* Contraseña */}
            <label htmlFor="password">Contraseña</label>
            <div className="relative w-full">
              <Field
                name="password"
                type={verPassword ? "text" : "password"}
                className="border border-[#DADADA] rounded w-full p-2 mt-1 pr-10"
              />
              <button
                type="button"
                className="absolute right-2 top-1/2 -translate-y-1/2 text-xs text-gray-500"
                onClick={() => setVerPassword((v) => !v)}
                tabIndex={-1}
              >
                {verPassword ? "Ocultar" : "Ver"}
              </button>
            </div>
            <ErrorMessage
              name="password"
              component="span"
              className="text-red-500 text-xs"
            />
            {touched.password && errors.password && (
              <ul className="mb-2 ml-2 text-xs">
                <li className="text-red-500">• Al menos 8 caracteres</li>
                <li className="text-red-500">• Al menos una mayúscula</li>
                <li className="text-red-500">• Al menos un número</li>
                <li className="text-red-500">
                  • Al menos un carácter especial
                </li>
              </ul>
            )}

            {/* Confirmar Contraseña */}
            {fields.includes("confirmPassword") && (
              <>
                <label htmlFor="confirmPassword">Confirmar Contraseña</label>
                <div className="relative w-full">
                  <Field
                    name="confirmPassword"
                    type={verPassword ? "text" : "password"}
                    className="border border-[#DADADA] rounded w-full p-2 mt-1 pr-10"
                  />
                  <ErrorMessage
                    name="confirmPassword"
                    component="span"
                    className="text-red-500 text-xs"
                  />
                </div>
                {touched.confirmPassword && errors.confirmPassword && (
                  <ul className="mb-2 ml-2 text-xs">
                    <li className="text-red-500">
                      • Las contraseñas no coinciden, verificar
                    </li>
                  </ul>
                )}
              </>
            )}

            {/* Número de Teléfono */}
            {fields.includes("phone_number") && (
              <>
                <label htmlFor="phone_number">Número de Teléfono</label>
                <Field
                  name="phone_number"
                  type="text"
                  className="border border-[#DADADA] rounded w-full p-2 mt-1"
                />
                <ErrorMessage
                  name="phone_number"
                  component="span"
                  className="text-red-500 text-xs"
                />
                {touched.phone_number && errors.phone_number && (
                  <ul className="mb-2 ml-2 text-xs">
                    <li className="text-red-500">
                      • El número de teléfono debe ser numérico
                    </li>
                  </ul>
                )}
              </>
            )}

            {/* Botón de submit */}
            <button
              type="submit"
              className="w-full bg-primary text-white font-semibold py-2 rounded-md text-base hover:bg-blue-600 transition-colors"
            >
              {buttonText}
            </button>
            {/* Mostrar error si hay alguno */}
            {error && <p className="text-red-500 text-xs">{error}</p>}
            <span className="text-center w-full text-sm">
              {footer.text}{" "}
              {footer.onClick ? (
                <a
                  href="#"
                  className="text-primary hover:underline"
                  onClick={footer.onClick}
                >
                  {footer.linkLabel}
                </a>
              ) : (
                <Link
                  to={footer.linkTo}
                  className="text-primary hover:underline"
                >
                  {footer.linkLabel}
                </Link>
              )}
            </span>
          </Form>
        )}
      </Formik>
      {/* Modal de éxito */}
      {showModal && (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg w-80 sm:w-96">
            <h2 className="text-xl font-semibold text-blue-600">
              ¡Registro Exitoso!
            </h2>
            <p className="text-sm text-gray-600 mt-2">
              Tu cuenta ha sido registrada con éxito.
            </p>
            <button
              onClick={() => {
                setEsLogin(true); // Cambiar el estado a "esLogin" para mostrar el formulario de login
                localStorage.setItem("isLogin", true); // Guardamos el estado en localStorage
                window.location.reload(); // Refrescar la página para actualizar el estado
              }}
              className="mt-4 w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-600 transition-colors"
            >
              Aceptar
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AuthForm;
