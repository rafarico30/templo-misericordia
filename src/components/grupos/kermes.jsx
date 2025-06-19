import React from 'react';
import Header from '../header';
import Footer from '../footer';
import { motion } from 'framer-motion';

import img1 from '../../assets/groups/kermes/kermes1.jpg';
import img2 from '../../assets/groups/kermes/kermes2.jpg';
import img3 from '../../assets/groups/kermes/kermes3.jpg';
import img4 from '../../assets/groups/kermes/kermes4.jpg';
import img5 from '../../assets/groups/kermes/kermes5.jpg';

function Kermes() {
  return (
    <div>
      <Header />

      {/* Sección 1 - Coordinadoras de Kermés */}
      <section className="py-10 bg-white">
        <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="grid grid-cols-2 grid-rows-2 gap-2 w-full max-w-2xl mx-auto min-h-[300px] order-1 lg:order-1">
            <div />
            <motion.img
              src={img4}
              alt="Catequesis 1"
              className="rounded-2xl w-full h-48 sm:h-64 md:h-80 lg:h-[26rem] object-cover shadow-lg col-start-2 row-start-1 transition-all duration-300"
              initial={{ opacity: 0, x: 40, y: -40 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              viewport={{ once: false }}
            />
            <motion.img
              src={img2}
              alt="Catequesis 2"
              className="rounded-2xl w-full h-48 sm:h-64 md:h-80 lg:h-[26rem] object-cover shadow-lg col-start-1 row-start-2 transition-all duration-300"
              initial={{ opacity: 0, x: -40, y: 40 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
              viewport={{ once: false }}
            />
            <div />
          </div>
          <motion.div
            className="flex flex-col items-start order-2 lg:order-2"
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.3 }}
            viewport={{ once: false }}
          >
            <h2 className="mt-32 mb-4 text-4xl lg:text-7xl font-bold text-dark dark:text-black leading-tight">
              Coordinadoras de kermés
            </h2>
            <p className="mt-6 mb-5 text-xl lg:text-3xl text-gray-600 dark:text-dark-6 font-semibold max-w-2xl">
              Las coordinadoras de kermés son el corazón material y social de nuestra parroquia. Desde su fundación, han sido las encargadas de crear un ambiente cálido y familiar a través de deliciosas comidas y actividades comunitarias.
            </p>
            <p className="text-lg text-gray-500 max-w-2xl">
              Su labor, marcada por la fe y la entrega a Dios y a la comunidad, ha sido fundamental para fortalecer los lazos entre los feligreses y grupos de la parroquia. Gracias a su iniciativa y dedicación, las kermeses se han convertido en una tradición arraigada, que ha evolucionado a lo largo de los años, siempre con el objetivo de servir y evangelizar mejor.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Sección 2 - Nuestra Misión */}
      <section className="w-full py-24 bg-white">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row items-center mb-24 gap-12">

            <motion.div
              className="md:w-1/2 w-full px-4"
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: false }}
            >
              <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-header">Nuestra misión</h2>
              <p className="text-xl text-gray-600 mb-6">
                Desde su fundación, la parroquia ha sido un espacio de encuentro y servicio comunitario. Por ello, al celebrar los veinticinco años de nuestra parroquia, también es importante reconocer la invaluable contribución de los feligreses, quienes con su dedicación y esfuerzo han sido artífices de su crecimiento y desarrollo.
              </p>
              <p className="text-lg text-gray-500">
                Cada iniciativa y colaboración ha cimentado los valores que hoy nos identifican como una comunidad activa, fraterna y al servicio de Dios.
              </p>
            </motion.div>
             <motion.div
              className="md:w-1/2 w-full px-4 flex justify-center"
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: false }}
            >
              <img
                src={img4}
                alt="Nuestra misión"
                className="rounded-3xl object-cover w-full max-w-xl h-[400px] shadow-lg"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Sección 3A - Historia y evolución */}
      <section className="w-full py-24 bg-white">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row items-center mb-24 gap-12">
           
            <motion.div
              className="md:w-1/2 w-full px-4 flex justify-center"
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: false }}
            >
              <img
                src={img2}
                alt="Kermés historia"
                className="rounded-3xl object-cover w-full max-w-xl h-[400px] shadow-lg"
              />
            </motion.div>
             <motion.div
              className="md:w-1/2 w-full px-4"
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: false }}
            >
              <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-header">Una tradición que ha crecido con nosotros</h2>
              <p className="text-xl text-gray-600 mb-6">
                Tal como lo relata la Sra. Guadalupe Aguilera Pizano, vecina y participante activa desde los inicios hasta hoy, la creación de grupos por calles para organizar las kermeses fue una iniciativa impulsada por Mons. Francisco Moreno Barrón.
              </p>
              <p className="text-lg text-gray-500">
                Estas primeras kermeses, con una oferta gastronómica básica y una infraestructura sencilla, sentaron las bases de una tradición que ha evolucionado a lo largo de los años.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Sección 3B - Actualidad y reflexión */}
      <section className="w-full py-24 bg-white">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row items-center mb-24 gap-12">
            <motion.div
              className="md:w-1/2 w-full px-4"
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: false }}
            >
              <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-header">Un legado que continúa</h2>
              <p className="text-xl text-gray-600 mb-6">
                Con la llegada de los párrocos, el Pbro. Manuel Villicaña, Pbro. Jesús Diaz Lule y el Pbro. Antonio Espinoza, las kermeses se enriquecieron con nuevas propuestas y mejoras en la infraestructura.
              </p>
              <p className="text-lg text-gray-500">
                Hoy en día, bajo la guía del Pbro. Mariano Colin, las kermeses se han consolidado como un evento semanal donde la comunidad se reúne para compartir y fortalecer sus lazos.
              </p>
              <p className="text-lg text-gray-500">
                El testimonio de la Sra. Aguilera nos recuerda la importancia del servicio y la fe en la construcción de nuestra comunidad parroquial.
              </p>
            </motion.div>
            <motion.div
              className="md:w-1/2 w-full px-4 flex justify-center"
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: false }}
            >
              <img
                src={img5}
                alt="Kermés actualidad"
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

export default Kermes;
