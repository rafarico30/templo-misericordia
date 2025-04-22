import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import logo from '../assets/logo.png'; // Asegúrate de que la ruta sea correcta

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-header text-white shadow-md">
      <div className="flex justify-between items-center py-2 px-6 md:px-12">
        {/* Logo */}
        <div className="flex items-center">
          <img src={logo} alt="Logo" className="h-14 w-14 mr-4" />
        </div>

        {/* Menú hamburguesa para pantallas pequeñas */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <FontAwesomeIcon icon={faBars} className="text-2xl" />
        </button>

        {/* Navegación */}
        <nav
          className={`${
            isMenuOpen ? 'block' : 'hidden'
          } absolute top-16 left-0 w-full bg-header md:static md:block md:w-auto`}
        >
          <ul className="flex flex-col md:flex-row md:space-x-6 items-center md:items-center md:ml-auto">
            <li>
              <a href="#inicio" className="block py-2 px-4 text-lg font-bold hover:text-gray-300">
                Inicio
              </a>
            </li>
            <li>
              <a href="#nosotros" className="block py-2 px-4 text-lg font-bold hover:text-gray-300">
                Nosotros
              </a>
            </li>
            <li>
              <a href="#grupos" className="block py-2 px-4 text-lg font-bold hover:text-gray-300">
                Grupos
              </a>
            </li>
            <li>
              <a href="#historia" className="block py-2 px-4 text-lg font-bold hover:text-gray-300">
                Historia
              </a>
            </li>
            <li>
              <a href="#contacto" className="block py-2 px-4 text-lg font-bold hover:text-gray-300">
                Contacto
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;