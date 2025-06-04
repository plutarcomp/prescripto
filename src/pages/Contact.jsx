import { assets } from "../assets/assets";
import CareersDescript from "../components/CareersDescript";
import ContactUs from "../components/ContactUs";

const Contact = () => {
  return (
    <>
      <div className="uppercase text-center font-semibold text-2xl pt-10 text-[#707070]">
        Contáctanos
      </div>
      <div className="my-10 flex flex-col justify-center items-center md:flex-row gap-10 mb-18 text-sm">
        <img
          src={assets.contact_image}
          alt="Imagen Contact"
          className="h-full md:max-w-[360px]"
        />
        <div className="flex flex-col justify-center items-start gap-6 text-base/10">
          <ContactUs />
        </div>
      </div>
      <div className="items-center text-center flex flex-col justify-center">
        <CareersDescript
          // Estos parámentros, de momento, están hardcodeados; sin embargo, la intención que sean pasados a través del Contexto.
          description={
            "Aprende más acerca de nuestro equipo y nuestros empleos"
          }
        />
      </div>
    </>
  );
};

export default Contact;
