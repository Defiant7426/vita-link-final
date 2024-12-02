

import { useContext } from "react";
import { ThemeContext } from "../../ThemeContext";

export default function Footer() {
  // Consumir el contexto del tema
  const { theme } = useContext(ThemeContext);

  // Clases dinámicas basadas en el tema
  const footerClasses = theme === 'dark' ? 'bg-[#152C2C] text-white' : 'bg-white text-black';
  const linkClasses = theme === 'dark' ? 'hover:text-vita-link hover:underline underline-offset-4 decoration-vita-link' : 'hover:text-vita-link hover:underline underline-offset-4 decoration-vita-link';

  return (
    <footer className={`${footerClasses} border-t border-gray-300 pt-10 transition-colors duration-300`}>
      <div className="max-w-7xl mx-auto text-sm ">
        <div className="grid grid-cols-5 gap-6">
          <div>
            <div className="mb-10">
              <img src="vitalink_logo.png" alt="Vitalink Logo" className="w-28" />
            </div>

            <div className="flex items-center gap-5 ">
              {/* Iconos de redes sociales */}
              {/* Asegúrate de que los iconos también cambien de color si es necesario */}
              <a href="#" className=" bg-white rounded-full">

              <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24" height="24" viewBox="0 0 50 50">
              <path d="M25,3C12.85,3,3,12.85,3,25c0,11.03,8.125,20.137,18.712,21.728V30.831h-5.443v-5.783h5.443v-3.848 c0-6.371,3.104-9.168,8.399-9.168c2.536,0,3.877,0.188,4.512,0.274v5.048h-3.612c-2.248,0-3.033,2.131-3.033,4.533v3.161h6.588 l-0.894,5.783h-5.694v15.944C38.716,45.318,47,36.137,47,25C47,12.85,37.15,3,25,3z"></path>
              </svg>

              </a>

              <a href="#" className="bg-white rounded-full">

              <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24" height="24" viewBox="0 0 30 30">
              <path d="M 9.9980469 3 C 6.1390469 3 3 6.1419531 3 10.001953 L 3 20.001953 C 3 23.860953 6.1419531 27 10.001953 27 L 20.001953 27 C 23.860953 27 27 23.858047 27 19.998047 L 27 9.9980469 C 27 6.1390469 23.858047 3 19.998047 3 L 9.9980469 3 z M 22 7 C 22.552 7 23 7.448 23 8 C 23 8.552 22.552 9 22 9 C 21.448 9 21 8.552 21 8 C 21 7.448 21.448 7 22 7 z M 15 9 C 18.309 9 21 11.691 21 15 C 21 18.309 18.309 21 15 21 C 11.691 21 9 18.309 9 15 C 9 11.691 11.691 9 15 9 z M 15 11 A 4 4 0 0 0 11 15 A 4 4 0 0 0 15 19 A 4 4 0 0 0 19 15 A 4 4 0 0 0 15 11 z"></path>
                </svg>

              </a>

              <a href="#" className="bg-white rounded-full">

              <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24" height="24" viewBox="0 0 50 50">
              <path d="M 44.898438 14.5 C 44.5 12.300781 42.601563 10.699219 40.398438 10.199219 C 37.101563 9.5 31 9 24.398438 9 C 17.800781 9 11.601563 9.5 8.300781 10.199219 C 6.101563 10.699219 4.199219 12.199219 3.800781 14.5 C 3.398438 17 3 20.5 3 25 C 3 29.5 3.398438 33 3.898438 35.5 C 4.300781 37.699219 6.199219 39.300781 8.398438 39.800781 C 11.898438 40.5 17.898438 41 24.5 41 C 31.101563 41 37.101563 40.5 40.601563 39.800781 C 42.800781 39.300781 44.699219 37.800781 45.101563 35.5 C 45.5 33 46 29.398438 46.101563 25 C 45.898438 20.5 45.398438 17 44.898438 14.5 Z M 19 32 L 19 18 L 31.199219 25 Z"></path>
              </svg>

              </a>

              <a href="#" className="bg-white rounded-full">

              <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24" height="24" viewBox="0 0 50 50">
              <path d="M 5.9199219 6 L 20.582031 27.375 L 6.2304688 44 L 9.4101562 44 L 21.986328 29.421875 L 31.986328 44 L 44 44 L 28.681641 21.669922 L 42.199219 6 L 39.029297 6 L 27.275391 19.617188 L 17.933594 6 L 5.9199219 6 z M 9.7167969 8 L 16.880859 8 L 40.203125 42 L 33.039062 42 L 9.7167969 8 z"></path>
              </svg>

              </a>

              <a href="#" className="bg-white rounded-full">
              <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24" height="24" viewBox="0 0 50 50">
    <path d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M17,20v19h-6V20H17z M11,14.47c0-1.4,1.2-2.47,3-2.47s2.93,1.07,3,2.47c0,1.4-1.12,2.53-3,2.53C12.2,17,11,15.87,11,14.47z M39,39h-6c0,0,0-9.26,0-10 c0-2-1-4-3.5-4.04h-0.08C27,24.96,26,27.02,26,29c0,0.91,0,10,0,10h-6V20h6v2.56c0,0,1.93-2.56,5.81-2.56 c3.97,0,7.19,2.73,7.19,8.26V39z"></path>
</svg>
              </a>
              
              {/* Agrega los demás iconos de manera similar */}
            </div>

            <p className="py-4 font-bold">© 2024 Empresa, S.A. Todos los derechos reservados.</p>
          </div>

          <div></div>

          <div className={`space-y-3 font-medium mt-14 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-900'}`}>
            <p><a href="/terminos" className={linkClasses}>Términos y Condiciones</a></p>
            <p><a href="/informacion" className={linkClasses}>Sobre Nosotros</a></p>
            <p><a href="/contacto" className={linkClasses}>Contactenos</a></p>
          </div>

          <div className={`space-y-3 font-medium mt-14 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-900'}`}>
            {/*<p><a href="#" className={linkClasses}>Nuestros Especialistas</a></p>*/}
            <p><a href="/creadores" className={linkClasses}>Creadores</a></p>
            <p><a href="/preguntasFrecuentes" className={linkClasses}>Preguntas Frecuentes</a></p>
          </div>


        </div>
      </div>
    </footer>
  );
}