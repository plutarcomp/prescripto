import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import Button from "./Button";

const AuthForm = ({
  title,
  subtitle,
  fields,
  buttonText,
  footer,
  formikRef,
}) => {
  const [verPassword, setVerPassword] = useState(false);
  const [touched, setTouched] = useState({
    name: false,
    email: false,
    password: false,
  });

  // Resetear touched cuando cambian los campos (por ejemplo, al cambiar de login a registro)
  useEffect(() => {
    setTouched({
      name: false,
      email: false,
      password: false,
    });
  }, [fields]);

  // Esquema de validación con Yup
  const validationSchema = Yup.object({
    ...(fields.includes("name") && {
      name: Yup.string()
        .matches(
          /^[A-Za-zÁÉÍÓÚáéíóúÑñ]+(\s+[A-Za-zÁÉÍÓÚáéíóúÑñ]+)+$/,
          "Escribe tu nombre y al menos un apellido."
        )
        .required("El nombre es obligatorio"),
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
  });

  // Valores iniciales dinámicos
  const initialValues = {
    ...(fields.includes("name") && { name: "" }),
    email: "",
    password: "",
  };

  const handleSubmit = (values) => {
    alert("Formulario válido:\n" + JSON.stringify(values, null, 2));
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-4">
      <Formik
        innerRef={formikRef}
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
        validateOnBlur={false}
        validateOnChange={false}
      >
        {({ values }) => (
          <Form className="flex justify-center flex-col gap-3 m-auto items-start p-8 min-w-[340px] sm:min-w-96 border rounded-xl text-[#5E5E5E] text-sm shadow-lg">
            <h1 className="text-2xl font-semibold text-[#232323]">{title}</h1>
            <p className="text-sm text-gray-500 mb-2">{subtitle}</p>

            {fields.includes("name") && (
              <>
                <label htmlFor="name">Nombre Completo</label>
                <Field
                  name="name"
                  type="text"
                  className="border border-[#DADADA] rounded w-full p-2 mt-1"
                  onFocus={() => setTouched((t) => ({ ...t, name: true }))}
                />
                <ErrorMessage
                  name="name"
                  component="span"
                  className="text-red-500 text-xs"
                />
                {/* Validación visual para nombre */}
                {touched.name && (
                  <ul className="mb-2 ml-2 text-xs">
                    <li
                      className={
                        /^[A-Za-zÁÉÍÓÚáéíóúÑñ]+(\s+[A-Za-zÁÉÍÓÚáéíóúÑñ]+)+$/.test(
                          values.name
                        )
                          ? "text-green-600"
                          : "text-red-500"
                      }
                    >
                      • Escribe tu nombre y al menos un apellido
                    </li>
                  </ul>
                )}
              </>
            )}

            <label htmlFor="email">Correo</label>
            <Field
              name="email"
              type="email"
              className="border border-[#DADADA] rounded w-full p-2 mt-1"
              onFocus={() => setTouched((t) => ({ ...t, email: true }))}
            />
            <ErrorMessage
              name="email"
              component="span"
              className="text-red-500 text-xs"
            />
            {/* Validación visual para correo */}
            {touched.email && (
              <ul className="mb-2 ml-2 text-xs">
                <li
                  className={
                    /^[\w-.]+@([\w-]+\.)+[\w-]{2,}$/.test(values.email)
                      ? "text-green-600"
                      : "text-red-500"
                  }
                >
                  • Correo electrónico válido
                </li>
              </ul>
            )}

            <label htmlFor="password">Contraseña</label>
            <div className="relative w-full">
              <Field
                name="password"
                type={verPassword ? "text" : "password"}
                className="border border-[#DADADA] rounded w-full p-2 mt-1 pr-10"
                onFocus={() => setTouched((t) => ({ ...t, password: true }))}
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
            {/* Validaciones visuales de la contraseña */}
            {fields.includes("name") && touched.password && (
              <ul className="mb-2 ml-2 text-xs">
                <li
                  className={
                    values.password.length >= 8
                      ? "text-green-600"
                      : "text-red-500"
                  }
                >
                  • Al menos 8 caracteres
                </li>
                <li
                  className={
                    /[A-Z]/.test(values.password)
                      ? "text-green-600"
                      : "text-red-500"
                  }
                >
                  • Al menos una mayúscula
                </li>
                <li
                  className={
                    /\d/.test(values.password)
                      ? "text-green-600"
                      : "text-red-500"
                  }
                >
                  • Al menos un número
                </li>
                <li
                  className={
                    /[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/.test(values.password)
                      ? "text-green-600"
                      : "text-red-500"
                  }
                >
                  • Al menos un carácter especial
                </li>
              </ul>
            )}

            <button
              type="submit"
              className="w-full bg-primary text-white font-semibold py-2 rounded-md text-base hover:bg-blue-600 transition-colors"
            >
             {buttonText}
            </button>
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
    </div>
  );
};

export default AuthForm;
