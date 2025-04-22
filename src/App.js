import './App.css';
import React from 'react';
import Header from './components/header';
import Footer from './components/footer';
import backgroundImage from './assets/background.jpg'; // Importa la imagen de portada

function App() {
  return (
    <div>
      <Header />
      <div
        className="bg-cover bg-center h-screen flex items-start justify-start"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="p-8 md:p-16 lg:py-32">
          <h1 className="font-serif text-4xl md:text-7xl font-bold mb-4 text-black">
            <span>Parroquia de</span>
            <br />
            <i className="text-header font-bold">El Señor de La <br /> Misericordia</i>
          </h1>

          <button className="bg-header text-white text-base md:text-lg font-bold px-4 py-2 md:px-6 md:py-3 rounded hover:bg-red-800 mt-6 md:mt-10">
            Conócenos
          </button>
        </div>
      </div>
      <div className="bg-gray-100 min-h-screen flex items-center justify-center">
        {/* Contenido principal */}
      </div>
      <Footer />
    </div>
  );
}

export default App;