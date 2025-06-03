import React from 'react';
import Header from '../header';
import Footer from '../footer';
import portada1 from '../../assets/groups/cristo-amigo/portada1.jpg';
import portada2 from '../../assets/groups/cristo-amigo/portada2.jpg';

function CristoAmigo() {
  return (
    <div>
      <Header />
      <section className="py-16 bg-white">
        <div className="container mx-auto flex flex-col md:flex-row items-center gap-12">
          {/* Texto */}
          <div className="md:w-1/2 w-full text-center md:text-left">
            <h2 className="text-4xl font-bold mb-6">Cristo Amigo</h2>
            <p className="text-lg text-gray-600">
              Fundado en 1998 por Mons. Francisco Moreno Barrón, el grupo juvenil de nuestra parroquia ha sido un espacio de encuentro y crecimiento espiritual para jóvenes y adolescentes. Desde sus inicios en el salón anexo de la Rectoría del Espíritu Santo, el grupo se ha adaptado a las necesidades de cada generación, consolidándose como un pilar fundamental de nuestra comunidad parroquial.
            </p>
          </div>
          {/* Imágenes */}
          <div className="md:w-1/2 w-full flex gap-4 justify-center">
            <img
              src={portada1}
              alt="Cristo Amigo 1"
              className="w-1/2 h-auto rounded-lg shadow-lg object-cover"
            />
            <img
              src={portada2}
              alt="Cristo Amigo 2"
              className="w-1/2 h-auto rounded-lg shadow-lg object-cover"
            />
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default CristoAmigo;