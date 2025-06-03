import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Header from '../header';
import Footer from '../footer';
import Slider from "react-slick";
import retiro1 from '../../assets/groups/cristo-amigo/retiros1.jpg';
import retiro2 from '../../assets/groups/cristo-amigo/retiros2.jpg';
import retiro3 from '../../assets/groups/cristo-amigo/retiros3.jpg';
import camp1 from '../../assets/groups/cristo-amigo/campamento1.jpg';
import camp2 from '../../assets/groups/cristo-amigo/campamento2.jpg';
import camp3 from '../../assets/groups/cristo-amigo/campamento3.jpg';
import portada1 from '../../assets/groups/cristo-amigo/portada1.jpg';
import portada2 from '../../assets/groups/cristo-amigo/portada2.jpg';

import { motion } from "framer-motion";
function CristoAmigo() {
const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  autoplay: true,           // Activa el cambio automático
  autoplaySpeed: 3000,
};
  return (
    <div>
      <Header />
      <section className="overflow-hidden pt-20 pb-12 lg:pt-[120px] lg:pb-[90px] bg-white dark:bg-dark">
          <div className="container mx-auto">
            <div className="flex flex-col lg:flex-row items-start -mx-4">
              <div className="w-full px-2 lg:w-7/12 flex flex-col items-center lg:items-start text-center lg:text-left">
                <motion.h2
                  className="mt-32 mb-4 text-4xl lg:text-7xl font-bold text-dark dark:text-black leading-tight"
                  initial={{ opacity: 0, y: -60 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  viewport={{ once: false }}
                >
                  Cristo Amigo
                </motion.h2>
                <motion.p
                  className="mt-6 mb-5 text-xl lg:text-3xl text-gray-600 dark:text-dark-6 font-semibold max-w-2xl"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
                  viewport={{ once: false }}
                >
                  Fundado en 1998 por Mons. Francisco Moreno Barrón, el grupo juvenil de nuestra parroquia ha sido un espacio de encuentro y crecimiento espiritual para jóvenes y adolescentes. Desde sus inicios en el salón anexo de la Rectoría del Espíritu Santo, el grupo se ha adaptado a las necesidades de cada generación, consolidándose como un pilar fundamental de nuestra comunidad parroquial
                   </motion.p>
              </div>
              {/* Imágenes a la derecha */}
              <div className="w-full px-4 lg:w-6/12 flex justify-center">
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
                      src={portada2}
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
            </div>
          </div>
        </section>

         <section className="w-full py-24 bg-white">
          <div className="container mx-auto">
            {/* Primer bloque: texto izquierda, foto derecha */}
            <div className="flex flex-col md:flex-row items-center mb-24 gap-12">
              <motion.div
                className="md:w-1/2 w-full px-4"
                initial={{ opacity: 0, x: -60 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true }}
              >
                <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-dark">Retiros</h2>
                <p className="text-xl text-gray-600 mb-6">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dui vivamus arcu felis bibendum ut tristique et egestas quis.
                </p>
                <p className="text-lg text-gray-500">
                  Ornare aenean euismod elementum nisi quis eleifend. Enim nulla aliquet porttitor lacus luctus accumsan tortor posuere.
                </p>
              </motion.div>
              <motion.div
                className="md:w-1/2 w-full px-4 flex justify-center"
                initial={{ opacity: 0, x: 60 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true }}
              >
                <Slider {...sliderSettings} className="w-full max-w-xl">
                  <img src={retiro1} alt="Retiros 1" className="rounded-3xl object-cover w-full h-[400px] shadow-lg" />
                  <img src={retiro2} alt="Retiros 2" className="rounded-3xl object-cover w-full h-[400px] shadow-lg" />
                  <img src={retiro3} alt="Retiros 3" className="rounded-3xl object-cover w-full h-[400px] shadow-lg" />
                </Slider>
              </motion.div>
            </div>
            {/* Segundo bloque: foto izquierda, texto derecha */}
            <div className="flex flex-col md:flex-row-reverse items-center gap-12">
              <motion.div
                className="md:w-1/2 w-full px-4"
                initial={{ opacity: 0, x: 60 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                viewport={{ once: false }}
              >
                <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-dark">Campamentos</h2>
                <p className="text-xl text-gray-600 mb-6">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dui vivamus arcu felis bibendum ut tristique et egestas quis.
                </p>
                <p className="text-lg text-gray-500">
                  Ornare aenean euismod elementum nisi quis eleifend. Enim nulla aliquet porttitor lacus luctus accumsan tortor posuere.
                </p>
              </motion.div>
              <motion.div
                className="md:w-1/2 w-full px-4 flex justify-center"
                initial={{ opacity: 0, x: -60 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                viewport={{ once: false }}
              >
                <Slider {...sliderSettings} className="w-full max-w-xl">
                  <img src={camp1} alt="Campamento 1" className="rounded-3xl object-cover w-full h-[400px] shadow-lg" />
                  <img src={camp2} alt="Campamento 2" className="rounded-3xl object-cover w-full h-[400px] shadow-lg" />
                  <img src={camp3} alt="Campamento 3" className="rounded-3xl object-cover w-full h-[400px] shadow-lg" />
                </Slider>
              </motion.div>
            </div>
          </div>
        </section>

      <Footer />
    </div>
  );
}

export default CristoAmigo;