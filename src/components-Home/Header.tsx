import { useState, useContext } from "react";
import { ThemeContext } from "../../ThemeContext";

export default function Header() {
  const [menuQuest, setMenuQuest] = useState(false);
  const [menuEspecialidades, setMenuEspecialidades] = useState(false);
  //const [isInHeader, setIsInHeader] = useState(false);

  // Consumir el contexto del tema
  const { theme, toggleTheme } = useContext(ThemeContext);

  // Clases dinámicas basadas en el tema
  const headerClasses = theme === "dark" ? "bg-gray-800 text-white" : "bg-white text-black";
  const linkClasses = "hover:text-vita-link hover:underline underline-offset-4 decoration-vita-link";

  return (
    <header className={`${headerClasses} transition-colors duration-300 shadow-md`}>
      <div className="max-w-7xl mx-auto flex items-center justify-between py-4 px-6">
        {/* Logo */}
        <a href="/home">
          <img src="vitalink_logo.png" alt="Vitalink Logo" className="w-24" />
        </a>

        {/* Navegación */}
        <nav className="flex items-center gap-6">
          {/* Opciones de navegación principales */}
          <div className="flex items-center gap-4">
            <div
              className="flex items-center gap-1 cursor-pointer"
              onMouseEnter={() => {
                setMenuQuest(true);
                setMenuEspecialidades(false);
              }}
            >
              <span>Citas</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`h-5 w-5 ${menuQuest ? "text-vita-link rotate-180 duration-300" : "text-gray-500"}`}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
              </svg>
            </div>
            <div
              className="flex items-center gap-1 cursor-pointer"
              onMouseEnter={() => {
                setMenuEspecialidades(true);
                setMenuQuest(false);
              }}
            >
              <span>Especialidades</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`h-5 w-5 ${menuEspecialidades ? "text-vita-link rotate-180 duration-300" : "text-gray-500"}`}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
              </svg>
            </div>
          </div>

          {/* Otras opciones */}
          <div className="flex items-center gap-4">
            <a href="/informacion" className={linkClasses}>
              Información sobre VitaLink
            </a>
            <a href="#" className={linkClasses}>
              Asistencia
            </a>
          </div>
        </nav>

        {/* Barra lateral derecha */}
        <div className="flex items-center gap-4">
          {/* Botón de búsqueda */}
          <div className="p-2 border border-gray-200 rounded-lg flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-gray-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-5.197-5.197M10.5 15.75a5.25 5.25 0 100-10.5 5.25 5.25 0 000 10.5z"
              />
            </svg>
            <span className="text-gray-500">Buscar</span>
          </div>

          {/* Perfil */}
          <a href="/perfil" className="hover:text-vita-link">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
              />
            </svg>
          </a>

          {/* Botón para alternar el tema */}
          <button onClick={toggleTheme} className="bg-gray-200 dark:bg-gray-600 p-2 rounded">
            {theme === "light" ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m8.66-9H21m-18 0H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m12.02 0l-.707-.707M6.343 6.343l-.707-.707M12 5a7 7 0 000 14 7 7 0 000-14z" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m8.66-9H21m-18 0H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m12.02 0l-.707-.707M6.343 6.343l-.707-.707M12 5a7 7 0 000 14 7 7 0 000-14z" />
              </svg>
            )}
          </button>
        </div>
      </div>
    </header>
  );
}

