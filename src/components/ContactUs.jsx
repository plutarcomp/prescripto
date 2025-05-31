import { Formik, yupToFormErrors } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";
import Button from "./Button";

const ContactSchema = Yup.object().shape({
  firstName: Yup.string()
    .required("El nombre es requerido")
    .min(2, "El valor debe ser de al menos dos caracteres")
    .max(30, "El nombre no debe rebasar los 30 caracteres"),
  lastName: Yup.string()
    .min(2, "El valor debe ser de al menos dos caracteres")
    .max(30, "El nombre no debe rebasar los 30 caracteres"),
  email: Yup.string()
    .email("Correo electrónico inválido")
    .required("El correo electrónico es requerido")
    .matches(
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
      "El formato de correo es inválido. Debe incluir el dominio completo ( ej: usuario@dominio.com)"
    ),
  message: Yup.string()
    .min(4, "El mensaje debe de tener al menos 4 caractéres")
    .required("El mensaje es requerido"),
});

const handleContact = (data) => {
  JSON.stringify(data);
  console.log("Datos del Fomulario", data);
};

const ContactUs = () => {
  return (
    <div>
      <h1 className="text-center font-semibold">Contáctanos</h1>
      <Formik
        initialValues={{ firstName: "", lastName: "", email: "", message: "" }}
        validationSchema={ContactSchema}
        onSubmit={handleContact}
      >
        {(formik) => (
          <form onSubmit={formik.handleSubmit}>
            {console.log(formik)}
            <div className="mt-2 mb-10 mx-10 grid grid-cols-1 gap-x-4 gap-y-6 p-6 sm:grid-cols-4 border rounded-sm shadow-md">
              <div className="sm:col-span-2">
                <label
                  htmlFor="firstName"
                  className="block text-sm/6 font-medium text-gray-900"
                >
                  First name
                </label>
                <div className="mt-2 border-2 rounded-md">
                  <input
                    id="firstName"
                    name="firstName"
                    type="text"
                    autoComplete="given-name"
                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.firstName}
                  />
                </div>
                <small className="text-red-800">
                  {formik.errors.firstName}
                </small>
              </div>

              <div className="sm:col-span-2">
                <label
                  htmlFor="lastName"
                  className="block text-sm/6 font-medium text-gray-900"
                >
                  Last name
                </label>
                <div className="mt-2 border-2 rounded-md">
                  <input
                    id="lastName"
                    name="lastName"
                    type="text"
                    autoComplete="family-name"
                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.lastName}
                  />
                </div>
                <small className="text-red-800">{formik.errors.lastName}</small>
              </div>

              <div className="sm:col-span-3">
                <label
                  htmlFor="email"
                  className="block text-sm/6 font-medium text-gray-900"
                >
                  Email
                </label>
                <div className="mt-2 border-2 rounded-md">
                  <div className="flex items-center rounded-md bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="usuario@dominio.com"
                      className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.email}
                    />
                  </div>
                </div>
                <small className="text-red-800">{formik.errors.email}</small>
              </div>

              <div className="col-span-full">
                <label
                  htmlFor="message"
                  className="block text-sm/6 font-medium text-gray-900"
                >
                  Mensaje
                </label>
                <div className="mt-2 border-2 rounded-md">
                  <textarea
                    id="message"
                    name="message"
                    rows={2}
                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                    placeholder="Escríbenos tus dudas y las responderemos."
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.message}
                  />
                </div>
                <small className="text-red-800">{formik.errors.message}</small>
              </div>
              <button
                type="submit"
                className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Enviar
              </button>
            </div>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default ContactUs;
