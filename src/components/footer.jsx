import React from 'react';
import facebookIcon from '../assets/facebook.png';
import instagramIcon from '../assets/instagram.png';
import gpsIcon from '../assets/gps.png';
import smartphoneIcon from '../assets/smartphone.png';
import mailIcon from '../assets/email.png';

function Footer() {
  const currentYear = new Date().getFullYear(); // Obtiene el año actual

  return (
    <footer className="bg-footer text-white py-6">
      <div className="flex flex-col items-center">
        {/* Íconos */}
        <div className="flex space-x-6 mb-4">
          <a href="#" className="hover:opacity-75">
            <img src={facebookIcon} alt="Facebook" className="h-8 w-8" />
          </a>
          <a href="#" className="hover:opacity-75">
            <img src={instagramIcon} alt="Instagram" className="h-8 w-8" />
          </a>
          <a href="#" className="hover:opacity-75">
            <img src={gpsIcon} alt="GPS" className="h-8 w-8" />
          </a>
          <a href="#" className="hover:opacity-75">
            <img src={smartphoneIcon} alt="Smartphone" className="h-8 w-8" />
          </a>
          <a href="#" className="hover:opacity-75">
            <img src={mailIcon} alt="Mail" className="h-8 w-8" />
          </a>
        </div>

        {/* Leyenda */}
        <p className="text-lg text-black font-bold">
          &copy; {currentYear} Todos los derechos reservados
        </p>
      </div>
    </footer>
  );
}

export default Footer;