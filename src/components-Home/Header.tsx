import { useState, useContext } from "react";
import { ThemeContext } from "../../ThemeContext";

export default function Header() {
  const [menuQuestOpen, setMenuQuestOpen] = useState(false);
  const [menuEspecialidadesOpen, setMenuEspecialidadesOpen] = useState(false);
  const [menuModulosOpen, setMenuModulosOpen] = useState(false);

  const { theme, toggleTheme } = useContext(ThemeContext);

  // Clases dinámicas basadas en el tema
  const headerClasses =
    theme === "dark" ? "bg-[#152C2C] text-white" : "bg-white text-black";

  return (
    <header
      className={`${headerClasses} transition-colors duration-300 shadow-md`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between py-4 px-6">
        {/* Logo */}
        <a href="/home">
          <img src="vitalink_logo.png" alt="Vitalink Logo" className="w-24" />
        </a>

        {/* Navegación */}
        <nav className="relative flex items-center gap-6">
          {/* Menú "Citas" */}
          <div
            className="relative"
            onMouseEnter={() => setMenuQuestOpen(true)}
            onMouseLeave={() => setMenuQuestOpen(false)}
          >
            <div className="flex items-center gap-1 cursor-pointer">
              <span>Citas</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`h-5 w-5 ${
                  menuQuestOpen
                    ? "text-vita-link rotate-180 duration-300"
                    : "text-gray-500"
                }`}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                />
              </svg>
            </div>
            {menuQuestOpen && (
              <div className="absolute top-full left-0 w-48 bg-white shadow-lg rounded-md py-2 z-50">
                <a
                  href="/chatcita"
                  className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                >
                  Nueva Cita
                </a>
                <a
                  href="/citasPendientes"
                  className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                >
                  Citas Pendientes
                </a>
                <a
                  href="/historialCitas"
                  className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                >
                  Historial de Citas
                </a>
              </div>
            )}
          </div>

          {/* Menú "Especialidades" */}
          <div
            className="relative"
            onMouseEnter={() => setMenuEspecialidadesOpen(true)}
            onMouseLeave={() => setMenuEspecialidadesOpen(false)}
          >
            <div className="flex items-center gap-1 cursor-pointer">
              <span>Especialidades</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`h-5 w-5 ${
                  menuEspecialidadesOpen
                    ? "text-vita-link rotate-180 duration-300"
                    : "text-gray-500"
                }`}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                />
              </svg>
            </div>
            {menuEspecialidadesOpen && (
              <div className="absolute top-full left-0 w-48 bg-white shadow-lg rounded-md py-2 z-50">
                <a
                  href="/cardiologia"
                  className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                >
                  Cardiología
                </a>
                <a
                  href="/pediatria"
                  className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                >
                  Pediatría
                </a>
                <a
                  href="/dermatologia"
                  className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                >
                  Dermatología
                </a>
              </div>
            )}
          </div>

          {/* Menú "Módulos" */}
          <div
            className="relative"
            onMouseEnter={() => setMenuModulosOpen(true)}
            onMouseLeave={() => setMenuModulosOpen(false)}
          >
            <div className="flex items-center gap-1 cursor-pointer">
              <span>Módulos</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`h-5 w-5 ${
                  menuModulosOpen
                    ? "text-vita-link rotate-180 duration-300"
                    : "text-gray-500"
                }`}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                />
              </svg>
            </div>
            {menuModulosOpen && (
              <div className="absolute top-full left-0 w-48 bg-white shadow-lg rounded-md py-2 z-50">
                <a
                  href="/resumenConsultas"
                  className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                >
                  Resumen de Consultas
                </a>
                <a
                  href="/chatImagen"
                  className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                >
                  Prescripción de Medicamentos
                </a>
              </div>
            )}
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
          <button
            onClick={toggleTheme}
            className="bg-gray-200 dark:bg-gray-600 p-2 rounded"
          >
            {theme === "light" ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 3v1m0 16v1m8.66-9H21m-18 0H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m12.02 0l-.707-.707M6.343 6.343l-.707-.707M12 5a7 7 7 7 7 7 000 14z" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 3v1m0 16v1m8.66-9H21m-18 0H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m12.02 0l-.707-.707M6.343 6.343l-.707-.707M12 5a7 7 7 7 7 7 000 14z" />
              </svg>
            )}
          </button>
        </div>
      </div>
    </header>
  );
}