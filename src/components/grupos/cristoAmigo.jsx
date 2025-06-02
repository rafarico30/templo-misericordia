import React from 'react';
import Header from '../header';
import Footer from '../footer';

function CristoAmigo() {
  return (
    <div>
      <Header />
      {/* Contenido de la página Cristo Amigo */}
      <section className="py-16 bg-white">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-8">Grupo Cristo Amigo</h2>
          {/* Aquí puedes agregar más contenido */}
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default CristoAmigo;