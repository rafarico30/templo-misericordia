import React from 'react';
import Header from '../header';
import Footer from '../footer';
import { motion } from 'framer-motion';

import img1 from '../../assets/groups/catequesis/photo1.jpg';
import img2 from '../../assets/groups/catequesis/photo1.jpg';

function Catequesis() {
  return (
    <div>
      <Header />
      <section className="py-10 bg-white">
        <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Texto a la izquierda */}
          <motion.div
            className="flex flex-col items-start"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.3 }}
            viewport={{ once: false }}
          >
            <h2 className="mt-32 mb-4 text-4xl lg:text-7xl font-bold text-dark dark:text-black leading-tight">Catequesis</h2>
            <p className="mt-6 mb-5 text-xl lg:text-3xl text-gray-600 dark:text-dark-6 font-semibold max-w-2xl">
              La catequesis es el proceso de formación en la fe cristiana, dirigido especialmente a niños y jóvenes para prepararlos a recibir los sacramentos y vivir los valores del Evangelio.
              Nuestro grupo acompaña a las familias en este camino, promoviendo la participación activa y el crecimiento espiritual en comunidad.
            </p>
          </motion.div>
          {/* Imágenes en diagonal a la derecha */}
          <div className="grid grid-cols-2 grid-rows-2 gap-2 w-full max-w-2xl mx-auto min-h-[300px]">
  <div />
        <motion.img
          src={img1}
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
        </div>
      </section>

      <section className="w-full py-24 bg-white">
        <div className="container mx-auto">
          {/* Sección Patrono: texto izquierda, foto derecha */}
         <div className="flex flex-col md:flex-row items-center mb-24 gap-12">
        {/* Foto a la izquierda */}
        <motion.div
          className="md:w-1/2 w-full px-4 flex justify-center"
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: false }}
        >
          <img
            src={img1}
            alt="El Señor de la Misericordia"
            className="rounded-3xl object-cover w-full max-w-xl h-[400px] shadow-lg"
          />
        </motion.div>
        {/* Texto a la derecha */}
        <motion.div
          className="md:w-1/2 w-full px-4"
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: false }}
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-header">Nuestra misión</h2>
          <p className="text-xl text-gray-600 mb-6">
            El grupo de catequesis de nuestra parroquia tiene como principal misión formar a los niños y a sus padres en la fe cristiana. Este camino de formación está centrado en conocer, amar y seguir a Jesucristo, promoviendo una vida cristiana activa y auténtica en el hogar y la comunidad.
          </p>
          <p className="text-lg text-gray-500">
           A través de encuentros, dinámicas, oraciones y celebraciones, ayudamos a que las familias se preparen adecuadamente para recibir los sacramentos de la Primera Comunión y la Confirmación, creando lazos espirituales que fortalecen la vida cristiana desde el núcleo familiar.
          </p>
        </motion.div>
      </div>  
        </div>
      </section>


  <section className="w-full py-24 bg-white">
  <div className="container mx-auto">
    {/* Sección Patrono: texto izquierda, foto derecha */}
    <div className="flex flex-col md:flex-row items-center mb-24 gap-12">
      {/* Texto a la izquierda */}
      <motion.div
        className="md:w-1/2 w-full px-4"
        initial={{ opacity: 0, x: -60 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: false }}
      >
        <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-header">¿Quienes forman el grupo de catequesis?</h2>
        <p className="text-xl text-gray-600 mb-6">
          Nuestro grupo está conformado por catequistas de corazón inigualable, personas que han entregado su vida a esta hermosa misión de transmitir la fe con dedicación, paciencia y amor. Su vocación se refleja en cada enseñanza y en el cariño con el que acompañan a cada niño y familia.
        </p>
        <p className="text-lg text-gray-500">
          Algunos de ellos han sido parte de este ministerio desde que la parroquia fue erigida, siendo testigos del crecimiento espiritual de generaciones enteras. En sus manos, los niños encuentran no solo una guía, sino un ejemplo vivo de fe, compromiso y servicio.
        </p>
      </motion.div>
      {/* Foto a la derecha */}
      <motion.div
        className="md:w-1/2 w-full px-4 flex justify-center"
        initial={{ opacity: 0, x: 60 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: false }}
      >
        <img
          src={img1}
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

export default Catequesis;