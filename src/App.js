import './App.css';
import React from 'react';
import Header from './components/header';
import Footer from './components/footer';
import Carousel from './components/carousel';
import backgroundImage from './assets/background.jpg';
import cristoAmigoImage from './assets/groups/cristo-amigo/photo1.jpg';
import misas from './assets/services/misas.png';
import notaria from './assets/services/notaria.png';
import horasSantas from './assets/services/horas-santas.png';
import sacramentos from './assets/services/sacramentos.png';
import comunidad from './assets/services/comunidad.png';
import catequesisImage from './assets/groups/catequesis/photo1.jpg';

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

      <div className="bg-gray-100 flex flex-col items-center justify-center py-12 px-4">
        <h2 className="text-5xl font-serif text-center mb-10">Grupos parroquiales</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-24 w-full max-w-6xl">
          <div className="bg-white rounded-xl overflow-hidden flex flex-col shadow-none transition-shadow duration-300 cursor-pointer hover:shadow-lg hover:shadow-gray-400">
            <img src={cristoAmigoImage} alt="Cristo Amigo" className="w-full h-full object-cover" />
            <div className="p-6 text-left">
              <h3 className="text-2xl font-bold text-header mb-2">Xto amigo</h3>
            </div>
          </div>

          <div className="bg-white rounded-xl overflow-hidden flex flex-col shadow-none transition-shadow duration-300 cursor-pointer hover:shadow-lg hover:shadow-gray-400">
            <img src={catequesisImage} alt="Catequesis" className="w-full h-full object-cover" />
            <div className="p-6 text-left">
              <h3 className="text-2xl font-bold text-header mb-2">Catequesis</h3>
            </div>
          </div>
        </div>

        <div className="mt-10">
          <button className="bg-header text-lg text-white font-bold px-10 py-4 rounded-lg hover:bg-red-800">
            Ver más
          </button>
        </div>

        <div className="bg-footer w-screen mt-10 py-14">
            <h2 className="text-5xl font-serif text-center ">Nuestros servicios</h2>
            <div className="flex flex-wrap justify-between gap-8 text-center mt-12 px-16 text-xl">
                <div className="flex flex-col items-center transition-all duration-300 hover:scale-110">
                <img src={misas} alt="Misas dominicales" className="w-28 h-28 mb-2" />
                <p className="font-medium leading-tight">Misas<br />dominicales</p>
                </div>

                <div className="flex flex-col items-center transition-all duration-300 hover:scale-110">
                <img src={notaria} alt="Notaría parroquial" className="w-28 h-28 mb-2" />
                <p className="font-medium leading-tight">Notaría<br />parroquial</p>
                </div>

                <div className="flex flex-col items-center transition-all duration-300 hover:scale-110">
                <img src={horasSantas} alt="Horas santas" className="w-32 h-32 mb-2" />
                <p className="font-medium">Horas santas</p>
                </div>

                <div className="flex flex-col items-center transition-all duration-300 hover:scale-110">
                <img src={sacramentos} alt="Sacramentos" className="w-32 h-32 mb-2" />
                <p className="font-medium">Sacramentos</p>
                </div>

                <div className="flex flex-col items-center transition-all duration-300 hover:scale-110">
                <img src={comunidad} alt="Comunidad parroquial" className="w-32 h-32 mb-2" />
                <p className="font-medium leading-tight">Comunidad<br />parroquial</p>
                </div>
            </div>
            </div>

            <div>
            <h2 className="text-5xl font-serif text-center mt-10">Nuestra historia</h2>

            <Carousel />
            </div>
      </div>

      <Footer />
    </div>
  );
}

export default App;