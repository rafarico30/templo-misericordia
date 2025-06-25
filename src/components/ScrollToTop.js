// src/components/ScrollToTop.js
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Siempre que cambia la ruta, hacemos scroll al tope
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default ScrollToTop;
