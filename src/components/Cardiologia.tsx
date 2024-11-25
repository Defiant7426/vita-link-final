import TopBar from '../components-Home/TopBar';
import Header from '../components-Home/Header';
import Footer from './Footer';

export default function Cardiologia() {
  return (
    <>
      <TopBar />
      <Header />
      <div className="max-w-7xl mx-auto mt-8 px-4 flex flex-col items-center py-14">
        {/* Introducción */}
        <h1 className="text-sm font-bold text-gray-800">SERVICIO DE CARDIOLOGÍA</h1>
        <div className="space-y-3 flex flex-col items-center">
          <h2 className="text-5xl font-semibold max-w-xl text-center">
            Cuidando tu corazón con tecnología de punta
          </h2>
        </div>
        <div className="max-w-4xl py-6">
          <p className="text-2xl text-slate-700 text-center">
            En VitaLink, nuestra prioridad es tu salud cardiovascular. Ofrecemos diagnósticos precisos, tratamientos avanzados y seguimiento personalizado 
            con un equipo de especialistas altamente capacitados para garantizar tu bienestar.
          </p>
        </div>
      </div>

      {/* Video promocional */}
      <div className="relative">
        <div className="relative max-w-7xl py-96 mx-auto px-8 z-30">
          <div className="max-w-7xl text-white flex flex-col items-center mt-auto">
            <h1 className="text-6xl font-semibold leading-tight text-center">
              Confía en nosotros para cuidar de tu corazón.
            </h1>
          </div>
        </div>

        <div className="absolute top-0 z-20 opacity-[60%] bg-gradient-to-r from-black from-25% bg-transparent w-full h-full"></div>

        <video
          autoPlay
          loop
          muted
          className="absolute top-0 z-10 w-auto min-w-full object-fill max-h-full max-w-none"
        >
          <source src="/vitaLinkVidCardiology.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Compromiso */}
      <div className="max-w-full mx-auto px-4 flex flex-col items-center py-32 bg-gradient-to-b from-vita-link to-white">
        <h1 className="text-sm font-bold text-gray-800">NUESTRO COMPROMISO</h1>
        <div className="space-y-3 flex flex-col items-center">
          <h2 className="text-5xl font-semibold max-w-xl text-center">
            Tu salud cardiovascular es nuestra prioridad.
          </h2>
        </div>
        <div className="max-w-4xl py-6">
          <p className="text-2xl text-slate-700 text-center">
            Nuestro equipo de especialistas en cardiología está comprometido a ofrecerte atención integral y personalizada. 
            Desde chequeos preventivos hasta tratamientos avanzados, en VitaLink estamos a tu lado en cada paso de tu recuperación.
          </p>
        </div>
      </div>

      {/* Beneficios del servicio */}
      <div className="max-w-7xl mx-auto mt-8 px-4 flex flex-col items-center py-14">
        <h1 className="text-sm font-bold text-gray-800">¿POR QUÉ ELEGIRNOS?</h1>
        <div className="space-y-3 flex flex-col items-center">
          <h2 className="text-5xl font-semibold max-w-xl text-center">
            Atención de clase mundial en cardiología
          </h2>
        </div>
        <div className="max-w-4xl py-6 space-y-4">
          <p className="text-2xl text-slate-700">
            ✔ Diagnósticos rápidos y precisos con la última tecnología.
          </p>
          <p className="text-2xl text-slate-700">
            ✔ Equipo de especialistas con amplia experiencia.
          </p>
          <p className="text-2xl text-slate-700">
            ✔ Tratamientos personalizados para cada paciente.
          </p>
          <p className="text-2xl text-slate-700">
            ✔ Acompañamiento y seguimiento continuo.
          </p>
        </div>
      </div>

      {/* Call to Action */}
      <div className="max-w-7xl mx-auto px-4 py-14 bg-gray-100 rounded-lg text-center">
        <h2 className="text-4xl font-semibold mb-4 pb-10">
          Agenda tu cita con un especialista en cardiología hoy mismo.
        </h2>
        <a
          href="/citas/nueva"
          className="bg-vita-link text-white py-4 px-6 rounded-full font-semibold text-lg hover:bg-vita-link-dark"
        >
          Solicitar una cita
        </a>
      </div>

      <div className="py-14">
        <Footer />
      </div>
    </>
  );
}
