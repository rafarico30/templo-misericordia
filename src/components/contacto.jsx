import React from 'react';
import Header from './header';
import Footer from './footer';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faClock, faPhone } from '@fortawesome/free-solid-svg-icons';

function Contacto() {
  return (
    <div>
      <Header />
      {/* Portada */}
      <section
        className="relative w-full h-[350px] flex items-center justify-center"
        style={{
          backgroundImage: `url(${require('../assets/contact/portadaContacto.jpg')})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        <div className="relative z-10 flex flex-col items-center w-full">
          <motion.h1
            className="text-6xl md:text-7xl font-extrabold text-white text-center mb-4 drop-shadow-lg"
            initial={{ opacity: 0, y: -60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            Contacto    
          </motion.h1>
        </div>
      </section>

      {/* Información útil */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <motion.h2
            className="text-5xl font-extrabold text-center text-gray-900 mb-4"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            Información útil
          </motion.h2>
          <motion.p
            className="text-xl text-center text-gray-500 mb-16"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true }}
          >
            Aquí puedes encontrar los datos de contacto y horarios de la parroquia.
          </motion.p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Dirección */}
            <motion.div
              className="bg-white rounded-2xl shadow-2xl p-10 flex flex-col items-center"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
              viewport={{ once: false }}
            >
              <FontAwesomeIcon icon={faMapMarkerAlt} className="text-5xl mb-6 text-yellow-400" />
              <h3 className="text-2xl font-bold mb-2 text-gray-900 text-center">Dirección</h3>
              <p className="text-gray-500 text-center">Av Pedregal 624A, La Colina, 58140 Morelia, Mich.</p>
            </motion.div>
            {/* Horarios */}
            <motion.div
              className="bg-white rounded-2xl shadow-2xl p-10 flex flex-col items-center"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
              viewport={{ once: false }}
            >
              <FontAwesomeIcon icon={faClock} className="text-5xl mb-6 text-yellow-400" />
              <h3 className="text-2xl font-bold mb-2 text-gray-900 text-center">Horarios de oficina</h3>
              <p className="text-gray-500 text-center">Lunes a Viernes: 9am – 2pm y 4pm – 7pm</p>
            </motion.div>
            {/* Teléfono */}
            <motion.div
              className="bg-white rounded-2xl shadow-2xl p-10 flex flex-col items-center"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.7 }}
              viewport={{ once: false }}
            >
              <FontAwesomeIcon icon={faPhone} className="text-5xl mb-6 text-yellow-400" />
              <h3 className="text-2xl font-bold mb-2 text-gray-900 text-center">Teléfono</h3>
              <p className="text-gray-500 text-center">+52 44 33 26 91 44</p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="container mx-auto px-4">
          <motion.h2
            className="text-4xl font-extrabold text-center text-gray-900 mb-8"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: false }}
          >
            ¿Dónde estamos?
          </motion.h2>
          <motion.div
            className="flex flex-col items-center justify-center"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: false }}
          >
            <div className="w-full max-w-3xl rounded-3xl overflow-hidden shadow-2xl border-4 border-gray-100">
              <iframe
                title="Ubicación Templo"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3732.095370325403!2d-101.2100006845936!3d19.7040007867226!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x842d0d6e6e6e6e6e%3A0x1234567890abcdef!2sGrafito%2035%2C%20Infonavit%20La%20Colina%2C%20Morelia%2C%20Michoac%C3%A1n!5e0!3m2!1ses-419!2smx!4v1686170000000!5m2!1ses-419!2smx"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            <p className="mt-6 text-lg text-gray-700 text-center">
              Grafito 35, Infonavit La Colina, Morelia, Michoacán
            </p>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Contacto;