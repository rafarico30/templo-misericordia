import React, { useState, useRef, useEffect } from 'react';
import Header from './header';
import Footer from './footer';
import { motion } from 'framer-motion';

const sacerdotes = [
  {
    nombre: 'S.E.R. Mons. Francisco Moreno Barrón',
    origen: 'Originario de Salamanca, Guanajuato.',
    foto: require('../assets/padres/franciscoMoreno.jpg'),
  },
  {
    nombre: 'Pbro. Manuel Villicaña Rivera',
    origen: 'Originario de Salamanca, Guanajuato.',
    foto: require('../assets/padres/manuelVicaña.jpg'),
  },
  {
    nombre: 'Pbro. Jesús Díaz Lule',
    origen: 'Originario de Salamanca, Guanajuato.',
    foto: require('../assets/padres/jesusDiaz.jpg'),
  },
  {
    nombre: 'Pbro. Antonio Espinoza',
    origen: 'Originario de Salamanca, Guanajuato.',
    foto: require('../assets/padres/antonioEspinoza.jpg'),
  },
  {
    nombre: 'Pbro. Mariano Colin García',
    origen: 'Originario de Salamanca, Guanajuato.',
    foto: require('../assets/padres/marianoColin.jpg'),
  },
];

function Historia() {
  const [pagina, setPagina] = useState(1);
  const porPagina = 2;
  const totalPaginas = Math.ceil(sacerdotes.length / porPagina);
  const visibles = sacerdotes.slice((pagina - 1) * porPagina, pagina * porPagina);

  const sacerdotesRef = useRef(null);

  useEffect(() => {
    if (sacerdotesRef.current) {
      sacerdotesRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, [pagina]);


  return (
    <div>
      <Header />

      <section className="w-full py-24 bg-white">
        <div className="container mx-auto">
          {/* Primer bloque: texto izquierda, foto derecha */}
          {/* Primer bloque: foto izquierda, texto derecha */}
<div className="flex flex-col md:flex-row items-center mb-24 gap-12">
  {/* Imagen a la izquierda */}
  <motion.div
    className="md:w-1/2 w-full px-4 flex justify-center"
    initial={{ opacity: 0, x: -60 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.8, ease: "easeOut" }}
    viewport={{ once: true }}
  >
    <img
      src={require('../assets/history/parroquia.jpg')}
      alt="Parroquia"
      className="rounded-3xl object-cover w-full max-w-xl h-[400px] shadow-lg"
    />
  </motion.div>
  {/* Texto a la derecha */}
  <motion.div
    className="md:w-1/2 w-full px-4"
    initial={{ opacity: 0, x: 60 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.8, ease: "easeOut" }}
    viewport={{ once: true }}
  >
    <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-dark">Historia de nuestra parroquia</h2>
    <p className="text-xl text-gray-600 mb-6">
      En el año de 1999, ante el creciente número de fieles y la necesidad de mejorar la atención pastoral ofrecida en la parroquia de Nuestra Señora de Guadalupe, el arzobispo de Morelia, Alberto Suárez Inda, tomó la histórica decisión de erigir una nueva parroquia con sede en el templo del Señor de la Misericordia, ubicado en Grafito, N. 35, en la colonia Infonavit la Colina.
    </p>
  </motion.div>
</div>
{/* Segundo bloque: texto izquierda, foto derecha */}
<div className="flex flex-col md:flex-row-reverse items-center gap-12">
  {/* Imagen a la derecha */}
  <motion.div
    className="md:w-1/2 w-full px-4 flex justify-center items-center overflow-hidden bg-white rounded-3xl h-[400px] max-w-xl"
    initial={{ opacity: 0, x: 60 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
    viewport={{ once: false }}
  >
    <img
      src={require('../assets/history/rito.jpg')}
      alt="Rito"
      className="object-contain h-full max-h-[400px] w-auto rounded-3xl"
    />
  </motion.div>
  {/* Texto a la izquierda */}
  <motion.div
    className="md:w-1/2 w-full px-4"
    initial={{ opacity: 0, x: -60 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
    viewport={{ once: false }}
  >
    <p className="text-xl text-gray-600 mb-6">
      Los límites de la nueva parroquia se definieron claramente: Al norte, colindaría con la parroquia de María Madre, entre las calles Diamante con sus plazas y andadores de amabas aceras, y en el andador Amatista y parte de la calle Esmeralda con sus andadores de ambas aceras. Al sur, con la parroquia de La Resurrección en Avenida Madero Poniente. Al oriente, con la parroquia de Mater dolorosa en el Rio Grande de Morelia y al poniente, con la parroquia de Nuestra Señora de Guadalupe en la calle Argentita; determinando que formaría parte de la Foranía No. 3 Morelia - Periferia, integrándose así al Plan Diocesano de Pastoral y de los programas vigentes en 1999.
    </p>
  </motion.div>
</div>
        </div>
      </section>
      <section className="w-full py-24 bg-white">
        <div className="container mx-auto">
          {/* Primer bloque: texto izquierda, foto derecha */}
          {/* Primer bloque: foto izquierda, texto derecha */}
<div className="flex flex-col md:flex-row items-center mb-24 gap-12">
  {/* Imagen a la izquierda */}
  <motion.div
    className="md:w-1/2 w-full px-4 flex justify-center"
    initial={{ opacity: 0, x: -60 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.8, ease: "easeOut" }}
    viewport={{ once: true }}
  >
    <img
      src={require('../assets/history/gente.jpg')}
      alt="Parroquia"
      className="rounded-3xl object-cover w-full max-w-xl h-[400px] shadow-lg"
    />
  </motion.div>
  {/* Texto a la derecha */}
  <motion.div
    className="md:w-1/2 w-full px-4"
    initial={{ opacity: 0, x: 60 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.8, ease: "easeOut" }}
    viewport={{ once: true }}
  >
    <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-dark">Lo mejor de la parroquia; Su gente</h2>
    <p className="text-xl text-gray-600 mb-6">
     “Fui párroco de un templo muy bonito de la periferia de la ciudad, con gente sencilla, linda, buena y de trabajo. Estuve en ese templo preparando la erección de la que sería una nueva parroquia y con el paso del tiempo fui el primer párroco de la iglesia del Señor de la Misericordia”. (Moreno Barrón, 2008)
     </p>
  </motion.div>
</div>
{/* Segundo bloque: texto izquierda, foto derecha */}
<div className="flex flex-col md:flex-row-reverse items-center gap-12">
  {/* Imagen a la derecha */}
  <motion.div
    className="md:w-1/2 w-full px-4 flex justify-center items-center overflow-hidden bg-white rounded-3xl h-[400px] max-w-xl"
    initial={{ opacity: 0, x: 60 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
    viewport={{ once: false }}
  >
    <img
      src={require('../assets/history/reliquia.jpg')}
      alt="Rito"
      className="object-contain h-full max-h-[400px] w-auto rounded-3xl"
    />
  </motion.div>
  {/* Texto a la izquierda */}
  <motion.div
    className="md:w-1/2 w-full px-4"
    initial={{ opacity: 0, x: -60 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
    viewport={{ once: false }}
  >
    <p className="text-xl text-gray-600 mb-6">
      Con el objetivo de preservar el patrimonio artístico y religioso de nuestra parroquia, el Pbro. Mariano Colin, nuestro párroco, ha impulsado la restauración de valiosas piezas como el Cristo de la Misericordia y la imagen de la Virgen de Guadalupe. Estas obras de arte, que han sido parte fundamental de nuestra comunidad por muchos años, han recuperado su esplendor original gracias a esta labor</p>
  </motion.div>
</div>
        </div>
      </section>

<section className="w-full py-24 bg-white" ref={sacerdotesRef}>
        <div className="container mx-auto">
          <motion.h2
            className="text-4xl lg:text-5xl font-bold mb-12 text-center text-dark"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Nuestros Sacerdotes
          </motion.h2>

          <div className="flex flex-col md:flex-row justify-center gap-12 mb-12 flex-wrap">
            {visibles.map((sacerdote, index) => (
              <motion.div
                key={index}
                className="flex flex-col md:flex-row items-center bg-gray-50 rounded-2xl p-8 w-full md:w-1/2 max-w-2xl shadow-md"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <img
                  src={sacerdote.foto}
                  alt={sacerdote.nombre}
                  className="w-48 h-56 object-cover rounded-2xl mb-6 md:mb-0 md:mr-8"
                />
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-2">{sacerdote.nombre}</h3>
                  <hr className="mb-4" />
                  <p className="text-gray-600 mb-6">{sacerdote.origen}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Paginación funcional */}
          <div className="flex items-center justify-center gap-8 mt-8">
            <button
              className="text-2xl disabled:text-gray-300"
              disabled={pagina === 1}
              onClick={() => setPagina(pagina - 1)}
            >
              {'←'}
            </button>

            <div>
              <div className="w-32 h-1 bg-gray-200 rounded-full mb-2">
                <div
                  className="h-1 bg-indigo-500 rounded-full"
                  style={{ width: `${(pagina / totalPaginas) * 100}%` }}
                ></div>
              </div>
              <span className="text-lg font-medium">
                {pagina} / {totalPaginas}
              </span>
            </div>

            <button
              className="text-2xl disabled:text-gray-300"
              disabled={pagina === totalPaginas}
              onClick={() => setPagina(pagina + 1)}
            >
              {'→'}
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Historia;
