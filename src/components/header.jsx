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
            <span className="flex items-center font-bold text-lg text-yellow-400">
              <FontAwesomeIcon icon={faHeart} className="mr-2" />
              El Señor de la Misericordia
            </span>
            <div className="text-xs text-gray-300">Parroquia Católica</div>
          </div>
        </div>

        {/* Menú hamburguesa */}
        <button
          className="lg:hidden text-white focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <FontAwesomeIcon icon={faBars} className="text-xl" />
        </button>

        {/* Menú principal */}
        <nav
          className={`${
            isMenuOpen ? 'block' : 'hidden'
          } absolute top-16 left-0 w-full bg-header z-50 lg:static lg:block lg:w-auto`}
        >
          <ul className="flex flex-col lg:flex-row lg:space-x-6 items-center lg:items-center lg:ml-auto">
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
                className="block py-2 px-4 text-md font-semibold hover:text-yellow-400"
                onClick={() => setIsMenuOpen(false)}
              >
                Nosotros
              </Link>
            </li>
            <li>
              <Link
                to="/grupos"
                className="block py-2 px-4 text-md font-semibold hover:text-yellow-400"
                onClick={() => setIsMenuOpen(false)}
              >
                Grupos
              </Link>
            </li>
            <li>
              <Link
                to="/historia"
                className="block py-2 px-4 text-md font-semibold hover:text-yellow-400"
                onClick={() => setIsMenuOpen(false)}
              >
                Historia
              </Link>
            </li>
            <li>
              <Link
                to="/contacto"
                className="block py-2 px-4 text-md font-semibold hover:text-yellow-400"
                onClick={() => setIsMenuOpen(false)}
              >
                Contacto
              </Link>
            </li>
          </ul>
        </nav>
          <div className="hidden lg:flex items-center space-x-4 ml-6">
                <a
                  href="https://www.facebook.com/profile.php?id=100066922358776"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-yellow-400"
                >
                  <FontAwesomeIcon icon={faFacebookF} />
                </a>
                <a
                  href="https://open.spotify.com/playlist/50blhcjJQqqOnjHwYRm9mJ?si=2v8PZ3pxR2me6tS6HIKcPQ"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-yellow-400"
                >
                  <FontAwesomeIcon icon={faSpotify} />
                </a>
                <a
                  href="https://www.instagram.com/xto_amigo?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-yellow-400"
                >
                  <FontAwesomeIcon icon={faInstagram} />
                </a>
</div>

      </div>
    </header>
  );
}

export default Header;