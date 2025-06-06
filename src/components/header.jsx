import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faHeart } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faSpotify, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-header text-white shadow-md">
      <div className="flex justify-between items-center py-2 px-6 md:px-12">
        {/* Logo y nombre */}
        <div className="flex items-center space-x-3">
          <Link to={"/"} className="flex items-center">
          <img src={logo} alt="Logo" className="h-12 w-12" />
          </Link>
          <div>
            <span className="flex items-center font-bold text-xl text-yellow-400">
              <FontAwesomeIcon icon={faHeart} className="mr-2" />
              El Señor de la Misericordia
            </span>
            <div className="text-xs text-gray-300">Parroquia Católica</div>
          </div>
        </div>

        {/* Menú hamburguesa */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <FontAwesomeIcon icon={faBars} className="text-2xl" />
        </button>

        {/* Menú principal */}
        <nav
          className={`${
            isMenuOpen ? 'block' : 'hidden'
          } absolute top-16 left-0 w-full bg-header md:static md:block md:w-auto`}
        >
          <ul className="flex flex-col md:flex-row md:space-x-6 items-center md:items-center md:ml-auto">
            <li>
              <Link
                to="/"
                className="block py-2 px-4 text-lg font-semibold hover:text-yellow-400"
                onClick={() => setIsMenuOpen(false)}
              >
                Inicio
              </Link>
            </li>
            <li>
              <Link
                to="/nosotros"
                className="block py-2 px-4 text-lg font-semibold hover:text-yellow-400"
                onClick={() => setIsMenuOpen(false)}
              >
                Nosotros
              </Link>
            </li>
            <li>
              <a href="/grupos" className="block py-2 px-4 text-lg font-semibold hover:text-yellow-400">
                Grupos
              </a>
            </li>
            <li>
              <a href="/historia" className="block py-2 px-4 text-lg font-semibold hover:text-yellow-400">
                Historia
              </a>
            </li>
            <li>
              <a href="/contacto" className="block py-2 px-4 text-lg font-semibold hover:text-yellow-400">
                Contacto
              </a>
            </li>
          </ul>
        </nav>

        {/* Redes sociales y botón */}
        <div className="hidden md:flex items-center space-x-4 ml-6">
          <a href="https://www.facebook.com/profile.php?id=100066922358776" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400">
            <FontAwesomeIcon icon={faFacebookF} />
          </a>
          <a href="https://open.spotify.com/playlist/50blhcjJQqqOnjHwYRm9mJ?si=2v8PZ3pxR2me6tS6HIKcPQ" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400">
            <FontAwesomeIcon icon={faSpotify} />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
        </div>
      </div>
    </header>
  );
}

export default Header;