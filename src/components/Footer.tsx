

import { useContext } from "react";
import { ThemeContext } from "../../ThemeContext";

export default function Footer() {
  // Consumir el contexto del tema
  const { theme } = useContext(ThemeContext);

  // Clases dinámicas basadas en el tema
  const footerClasses = theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-white text-black';
  const linkClasses = theme === 'dark' ? 'hover:text-vita-link hover:underline underline-offset-4 decoration-vita-link' : 'hover:text-vita-link hover:underline underline-offset-4 decoration-vita-link';

  return (
    <footer className={`${footerClasses} border-t border-gray-300 pt-10 transition-colors duration-300`}>
      <div className="max-w-7xl mx-auto text-sm mb-24">
        <div className="grid grid-cols-5 gap-6">
          <div>
            <div className="mb-10">
              <img src="vitalink_logo.png" alt="Vitalink Logo" className="w-28" />
            </div>

            <div className="flex items-center gap-5">
              {/* Iconos de redes sociales */}
              {/* Asegúrate de que los iconos también cambien de color si es necesario */}
              <img className="_8h4h img hover:saturate-[2000%] cursor-pointer" src="https://scontent.flim38-1.fna.fbcdn.net/..." height="24" width="24" alt="icono de facebook" />
              {/* Agrega los demás iconos de manera similar */}
            </div>

            <p className="py-4 font-bold">© 2024 Company, Inc. All rights reserved.</p>
          </div>

          <div></div>

          <div className={`space-y-3 font-medium ${theme === 'dark' ? 'text-gray-300' : 'text-gray-900'}`}>
            <p><a href="#" className={linkClasses}>Features</a></p>
            <p><a href="#" className={linkClasses}>Enterprise</a></p>
            <p><a href="#" className={linkClasses}>Precios</a></p>
          </div>

          <div className={`space-y-3 font-medium ${theme === 'dark' ? 'text-gray-300' : 'text-gray-900'}`}>
            <p><a href="#" className={linkClasses}>Compañía</a></p>
            <p><a href="#" className={linkClasses}>Blogs</a></p>
            <p><a href="#" className={linkClasses}>Press</a></p>
            <p><a href="#" className={linkClasses}>Creadores</a></p>
            <p><a href="#" className={linkClasses}>Soporte</a></p>
          </div>

          <div>
            <ul className={`space-y-3 font-medium ${theme === 'dark' ? 'text-gray-300' : 'text-gray-900'}`}>
              <li><a href="#" className={linkClasses}>Inicio</a></li>
              <li><a href="#" className={linkClasses}>Servicios</a></li>
              <li><a href="#" className={linkClasses}>Acerca de</a></li>
              <li><a href="#" className={linkClasses}>Contacto</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
