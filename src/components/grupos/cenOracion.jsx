import React from 'react';
import Header from '../header';
import Footer from '../footer';
import { motion } from 'framer-motion';

import portada1 from '../../assets/groups/cristo-amigo/portada1.jpg';

function Cenaculos() {
  return (
    <div>
      <Header />
      <section className="overflow-hidden pt-20 pb-12 lg:pt-[120px] lg:pb-[90px] bg-white dark:bg-dark">
  <div className="container mx-auto">
    <div className="flex flex-col lg:flex-row items-start -mx-4">
      {/* Imágenes a la izquierda */}
      <div className="w-full px-4 lg:w-6/12 flex justify-center order-1 lg:order-1">
        <div className="grid grid-cols-2 gap-4 items-center">
          {/* img3 a la izquierda ocupando dos filas */}
          <motion.div
            className="row-span-2"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: false }}
          >
            <img
              src={portada1}
              alt="Nosotros 3"
              className="w-full h-full rounded-2xl object-cover"
            />
          </motion.div>
          {/* img1 arriba a la derecha */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: false }}
          >
            <img
              src={portada1}
              alt="Nosotros 1"
              className="w-full h-full rounded-2xl object-cover"
            />
          </motion.div>
          {/* img2 abajo a la derecha */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
            viewport={{ once: false }}
          >
            <img
              src={portada1}
              alt="Nosotros 2"
              className="w-full h-full rounded-2xl object-cover"
            />
          </motion.div>
        </div>
      </div>
      {/* Texto a la derecha */}
      <div className="w-full px-2 lg:w-7/12 flex flex-col items-center lg:items-start text-center lg:text-left order-2 lg:order-2">
        <motion.h2
          className="mt-32 mb-4 text-4xl lg:text-7xl font-bold text-dark dark:text-black leading-tight"
          initial={{ opacity: 0, y: -60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: false }}
        >
          Cenáculos de oración
        </motion.h2>
        <motion.p
          className="mt-6 mb-5 text-xl lg:text-3xl text-gray-600 dark:text-dark-6 font-semibold max-w-2xl"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
          viewport={{ once: false }}
        >
         Este grupo tiene como objetivo principal fomentar una experiencia personal y comunitaria de Dios mediante la oración y la reflexión de la Palabra. A través de estos encuentros, los participantes fortalecen su fe, se apoyan mutuamente y crecen como comunidad.
       </motion.p>
      </div>
    </div>
  </div>
</section>

  <section className="w-full py-24 bg-white">
  <div className="container mx-auto">
    {/* Sección Patrono: foto izquierda, texto derecha (INVERTIDO) */}
    <div className="flex flex-col md:flex-row items-center mb-24 gap-12">
      {/* Texto a la derecha */}
      <motion.div
        className="md:w-1/2 w-full px-4 order-2 md:order-1"
        initial={{ opacity: 0, x: 60 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: false }}
      >
        <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-header">Encuentro con Dios a través de la oración</h2>
        <p className="text-xl text-gray-600 mb-6">
          Una parte fundamental de nuestra misión es fomentar la devoción al Señor de la Misericordia. Confiamos en su amor infinito, y en cada encuentro oramos con fe por nuestras familias, por nuestra comunidad y por el mundo entero.

                   </p>
        <p className="text-lg text-gray-500">
          La oración compartida se convierte en un canal de gracia que transforma vidas, une corazones y nos acerca más a la presencia viva de Dios en medio de nuestra parroquia.  Nos sentimos llamados a difundir su mensaje de amor, perdón y esperanza, animando a todos los fieles a confiar en Él y a vivir una fe comprometida y llena de compasión.
     
        </p>
      </motion.div>
      {/* Foto a la izquierda (ahora a la derecha) */}
      <motion.div
        className="md:w-1/2 w-full px-4 flex justify-center order-1 md:order-2"
        initial={{ opacity: 0, x: -60 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: false }}
      >
        <img
          src={portada1}
          alt="El Señor de la Misericordia"
          className="rounded-3xl object-cover w-full max-w-xl h-[400px] shadow-lg"
        />
      </motion.div>
    </div>
  </div>
</section>

      <Footer />
    </div>
  );
}

export default Cenaculos;