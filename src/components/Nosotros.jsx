import React from 'react';
import Header from './header';
import Footer from './footer';

// Importa tus imágenes
import img1 from '../assets/nosotros/nosotros1.jpg';
import img2 from '../assets/nosotros/nosotros2.jpg';
import img3 from '../assets/nosotros/nosotros3.jpg';
import { motion } from "framer-motion";
function Nosotros() {
  return (
    <div>
      <Header />
      <>
        <section className="overflow-hidden pt-20 pb-12 lg:pt-[120px] lg:pb-[90px] bg-white dark:bg-dark">
          <div className="container mx-auto">
            <div className="flex flex-col lg:flex-row items-start -mx-0">
              <div className="w-full px-2 lg:w-7/12 flex flex-col items-center lg:items-start text-center lg:text-left">
                <motion.h2
                  className="mt-32 mb-4 text-4xl lg:text-7xl font-bold text-dark dark:text-black leading-tight"
                  initial={{ opacity: 0, y: -60 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  viewport={{ once: false }}
                >
                  “Aleluya, la Misericordia del Señor es eterna, Aleluya...”
                </motion.h2>
                <motion.h3
                  className="mb-6 text-2xl font-semibold text-dark dark:text-black"
                  initial={{ opacity: 0, y: -40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                  viewport={{ once: false }}
                >
                  SALMO 117,2
                </motion.h3>
                <motion.p
                  className="mt-6 mb-5 text-xl lg:text-3xl text-gray-600 dark:text-dark-6 font-semibold max-w-2xl"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
                  viewport={{ once: false }}
                >
                  Nuestra parroquia, El Señor de la Misericordia, es fruto del compromiso y la fe de una comunidad unida, que ha florecido bajo la guía amorosa de Dios y la protección maternal de la Santísima Virgen María.
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
                      src={img3}
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
                      src={img1}
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
                      src={img2}
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
      src={require('../assets/padres/divina-misericordia.jpg')}
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
    viewport={{ once: true }}
  >
    <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-header">Oración del Año Jubilar de Nuestra Parroquia</h2>
    <p className="text-xl text-gray-600 mb-6">
     ¡Oh Señor de la Misericordia! Tu amor misericordioso resplandece en los rayos de tu corazón abierto, son tu agua y tu sangre que nos lavan y nos dan vida en el bautismo y en la eucaristía.
    </p>
    <p className="text-xl text-gray-600 mb-6">
     Nosotros pecadores, humildes y arrepentidos, confiadamente acudimos a ti. A todos muéstranos, Señor, tu misericordia, de modo especial en este año jubilar, por el 25 aniversario de la erección canónica de nuestra parroquia, confiada a tu divino patrocinio.
    </p>
    <p className="text-xl text-gray-600 mb-6">
    Te traemos a toda la humanidad, a todos los pecadores, para que los acojas en tu compasivo corazón; a los sacerdotes y a las almas de los religiosos y religiosas, que fueron tu fortaleza en tu pasión; a las almas devotas y fieles, tu consuelo a lo largo del vía crucis; a los paganos, cuyo futuro celo consoló tu corazón; a los herejes y cismáticos, que al regresar a tu Iglesia cicatrizan tus llagas; a las almas mansas y humildes y a las almas de los niños pequeños, las más semejantes a tu corazón; a las almas que veneran y glorifican tu misericordia de modo especial, que son reflejo viviente de tu corazón compasivo; a las almas que están en la cárcel del purgatorio y cumplen el justo castigo debido a tu justicia; y a las almas tibias, que son las que más dolorosamente hieren tu corazón. 
    </p>
    <p className="text-xl text-gray-600 mb-6">
    A todos, Señor, danos tu misericordia y tu salvación.  Amén.
    </p>
    <p className="text-xl text-gray-600 mb-6">
    Jesús, yo confío en ti.
    </p>
  </motion.div>
</div>  
  </div>
</section>


 <motion.h2
                  className="text-5xl font-extrabold text-center text-gray-900 mb-4"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  viewport={{ once: true }}
                >
                  Nuestros Sacerdotes
                </motion.h2>
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
        <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-dark">Pbro. Mariano</h2>
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
        <img
          src={require('../assets/padres/padreMariano.jpg')}
          alt="Pbro. Mariano"
          className="rounded-3xl object-cover w-full max-w-xl h-[400px] shadow-lg"
        />
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
        <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-dark">Pbro. Liberio</h2>
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
        <img
          src={require('../assets/padres/padreLiberio.jpg')}
          alt="Pbro. Liberio"
          className="rounded-3xl object-cover w-full max-w-xl h-[400px] shadow-lg"
        />
      </motion.div>
    </div>
  </div>
</section>


      </>
      <Footer />
    </div>
  );
}

export default Nosotros;