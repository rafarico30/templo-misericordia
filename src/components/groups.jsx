import React from 'react';
import Header from './header';
import Footer from './footer';
import { motion } from 'framer-motion';

function Groups() {
  return (
    <div>
      <Header />
      <section
        className="relative w-full h-[350px] flex items-center justify-center"
        style={{
          backgroundImage: `url(${require('../assets/bgGrupos.jpg')})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        <div className="relative z-10 flex flex-col items-center w-full">
          <h1 className="text-6xl md:text-7xl font-extrabold text-white text-center mb-4 drop-shadow-lg">
            Grupos Parroquiales
          </h1>
        </div>
      </section>
      <section className="py-16 bg-white">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 justify-items-center">
            {/* Card 1 */}
            <motion.div
              className="flex flex-col items-center bg-white rounded-[2rem] shadow-lg p-0 w-full max-w-xl"
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              viewport={{ once: false }}
            >
              <motion.img
                src={require('../assets/groups/cristo-amigo/photo1.jpg')}
                alt="Grupo 1"
                className="rounded-[2rem] w-full h-[320px] object-cover mb-8"
                initial={{ scale: 0.95, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                viewport={{ once: false }}
              />
              <motion.h3
                className="text-3xl font-bold text-center mb-4 leading-tight"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
                viewport={{ once: false }}
              >
                Catequesis
              </motion.h3>
              <motion.p
                className="text-gray-500 text-center mb-6 text-lg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
                viewport={{ once: false }}
              >
                El grupo de catequesis de la parroquia, busca formar a los niños en la fe cristiana, ayudándoles a conocer, amar y seguir a Jesucristo. 
              </motion.p>
              <motion.button
                className="bg-yellow-400 text-black text-xl font-semibold px-12 py-4 rounded-xl hover:bg-yellow-500 transition mb-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: "easeOut", delay: 0.3 }}
                viewport={{ once: false }}
              >
                Más información
              </motion.button>
            </motion.div>
            {/* Card 2 */}
            <motion.div
              className="flex flex-col items-center bg-white rounded-[2rem] shadow-lg p-0 w-full max-w-xl"
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
              viewport={{ once: false }}
            >
              <motion.img
                src={require('../assets/groups/cristo-amigo/photo1.jpg')}
                alt="Grupo 2"
                className="rounded-[2rem] w-full h-[320px] object-cover mb-8"
                initial={{ scale: 0.95, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                viewport={{ once: false }}
              />
              <motion.h3
                className="text-3xl font-bold text-center mb-4 leading-tight"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
                viewport={{ once: false }}
              >
                Cenáculos de oración.
              </motion.h3>
              <motion.p
                className="text-gray-500 text-center mb-6 text-lg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
                viewport={{ once: false }}
              >
                Este grupo tiene como objetivo principal fomentar una experiencia personal y comunitaria de Dios a través de la oración y la reflexión de la Palabra de Dios.
              </motion.p>
              <motion.button
                className="bg-yellow-400 text-black text-xl font-semibold px-12 py-4 rounded-xl hover:bg-yellow-500 transition mb-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: "easeOut", delay: 0.3 }}
                viewport={{ once: false }}
              >
                Más información
              </motion.button>
            </motion.div>
            {/* Card 3 */}
            <motion.div
              className="flex flex-col items-center bg-white rounded-[2rem] shadow-lg p-0 w-full max-w-xl"
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
              viewport={{ once: false }}
            >
              <motion.img
                src={require('../assets/groups/cristo-amigo/photo1.jpg')}
                alt="Grupo 3"
                className="rounded-[2rem] w-full h-[320px] object-cover mb-8"
                initial={{ scale: 0.95, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                viewport={{ once: false }}
              />
              <motion.h3
                className="text-3xl font-bold text-center mb-4 leading-tight"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
                viewport={{ once: false }}
              >
                Coordinadoras de kermes
              </motion.h3>
              <motion.p
                className="text-gray-500 text-center mb-6 text-lg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
                viewport={{ once: false }}
              >
                Desde su fundación, han sido las encargadas de crear un ambiente cálido y familiar a través de deliciosas comidas y actividades comunitarias.
              </motion.p>
              <motion.button
                className="bg-yellow-400 text-black text-xl font-semibold px-12 py-4 rounded-xl hover:bg-yellow-500 transition mb-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: "easeOut", delay: 0.3 }}
                viewport={{ once: false }}
              >
                Más información
              </motion.button>
            </motion.div>
            {/* Card 4 */}
            <motion.div
              className="flex flex-col items-center bg-white rounded-[2rem] shadow-lg p-0 w-full max-w-xl"
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.3 }}
              viewport={{ once: false }}
            >
              <motion.img
                src={require('../assets/groups/cristo-amigo/photo1.jpg')}
                alt="Grupo 4"
                className="rounded-[2rem] w-full h-[320px] object-cover mb-8"
                initial={{ scale: 0.95, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                viewport={{ once: false }}
              />
              <motion.h3
                className="text-3xl font-bold text-center mb-4 leading-tight"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
                viewport={{ once: false }}
              >
                Cristo Amigo
              </motion.h3>
              <motion.p
                className="text-gray-500 text-center mb-6 text-lg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
                viewport={{ once: false }}
              >
                Fundado en 1998 por Mons. Francisco Moreno Barrón, el grupo juvenil de nuestra parroquia ha sido un espacio de encuentro y crecimiento espiritual para jóvenes y adolescentes.
              </motion.p>
              <motion.a
                className="bg-yellow-400 text-black text-xl font-semibold px-12 py-4 rounded-xl hover:bg-yellow-500 transition mb-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: "easeOut", delay: 0.3 }}
                viewport={{ once: false }}
                href='/cristoAmigo'
              >
                Más información
              </motion.a>
            </motion.div>
            {/* Card 5 */}
            <motion.div
              className="flex flex-col items-center bg-white rounded-[2rem] shadow-lg p-0 w-full max-w-xl"
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.4 }}
              viewport={{ once: false}}
            >
              <motion.img
                src={require('../assets/groups/cristo-amigo/photo1.jpg')}
                alt="Grupo 5"
                className="rounded-[2rem] w-full h-[320px] object-cover mb-8"
                initial={{ scale: 0.95, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                viewport={{ once: false }}
              />
              <motion.h3
                className="text-3xl font-bold text-center mb-4 leading-tight"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
                viewport={{ once: false }}
              >
                 Dinámicas matrimoniales
              </motion.h3>
              <motion.p
                className="text-gray-500 text-center mb-6 text-lg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
                viewport={{ once: false }}
              >
                Su misión es servir, compartir, convivir y recibir a los matrimonios que sufren desintegración, concientizándolos del amor de Dios, reviviendo los valores y solidaridad en familia.
              </motion.p>
              <motion.button
                className="bg-yellow-400 text-black text-xl font-semibold px-12 py-4 rounded-xl hover:bg-yellow-500 transition mb-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: "easeOut", delay: 0.3 }}
                viewport={{ once: false }}
              >
                Más información
              </motion.button>
            </motion.div>
            {/* Card 6 */}
            <motion.div
              className="flex flex-col items-center bg-white rounded-[2rem] shadow-lg p-0 w-full max-w-xl"
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.5 }}
              viewport={{ once: false }}
            >
              <motion.img
                src={require('../assets/groups/cristo-amigo/photo1.jpg')}
                alt="Grupo 6"
                className="rounded-[2rem] w-full h-[320px] object-cover mb-8"
                initial={{ scale: 0.95, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                viewport={{ once: false }}
              />
              <motion.h3
                className="text-3xl font-bold text-center mb-4 leading-tight"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
                viewport={{ once: false }}
              >
                Escuela de Pastoral
              </motion.h3>
              <motion.p
                className="text-gray-500 text-center mb-6 text-lg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
                viewport={{ once: false }}
              >
                La Escuela de Pastoral tiene como misión principal formar laicos comprometidos con la Iglesia, brindándoles una formación integral que les permita crecer espiritualmente y adquirir las herramientas necesarias para ser agentes activos de evangelización
              </motion.p>
              <motion.button
                className="bg-yellow-400 text-black text-xl font-semibold px-12 py-4 rounded-xl hover:bg-yellow-500 transition mb-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: "easeOut", delay: 0.3 }}
                viewport={{ once: false }}
              >
                Más información
              </motion.button>
            </motion.div>
            {/* Card 7 */}
            <motion.div
              className="flex flex-col items-center bg-white rounded-[2rem] shadow-lg p-0 w-full max-w-xl"
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.6 }}
              viewport={{ once: false }}
            >
              <motion.img
                src={require('../assets/groups/cristo-amigo/photo1.jpg')}
                alt="Grupo 7"
                className="rounded-[2rem] w-full h-[320px] object-cover mb-8"
                initial={{ scale: 0.95, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                viewport={{ once: false }}
              />
              <motion.h3
                className="text-3xl font-bold text-center mb-4 leading-tight"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
                viewport={{ once: false }}
              >
                Liturgia
              </motion.h3>
              <motion.p
                className="text-gray-500 text-center mb-6 text-lg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
                viewport={{ once: false }}
              >
                El grupo de liturgia tiene varios propósitos: santificar a las personas, edificar el pueblo de Cristo y adorar a Dios a través de una participación gozosa y comunitaria.
              </motion.p>
              <motion.button
                className="bg-yellow-400 text-black text-xl font-semibold px-12 py-4 rounded-xl hover:bg-yellow-500 transition mb-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: "easeOut", delay: 0.3 }}
                viewport={{ once: false }}
              >
                Más información
              </motion.button>
            </motion.div>
            {/* Card 8 */}
            <motion.div
              className="flex flex-col items-center bg-white rounded-[2rem] shadow-lg p-0 w-full max-w-xl"
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.7 }}
              viewport={{ once: false }}
            >
              <motion.img
                src={require('../assets/groups/cristo-amigo/photo1.jpg')}
                alt="Grupo 8"
                className="rounded-[2rem] w-full h-[320px] object-cover mb-8"
                initial={{ scale: 0.95, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                viewport={{ once: false }}
              />
              <motion.h3
                className="text-3xl font-bold text-center mb-4 leading-tight"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
                viewport={{ once: false }}
              >
                Monaguillos
              </motion.h3>
              <motion.p
                className="text-gray-500 text-center mb-6 text-lg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
                viewport={{ once: false }}
              >
               El grupo de monaguillos desempeña un papel fundamental en la liturgia de la Iglesia, cuya misión principal es asistir al sacerdote durante las celebraciones contribuyendo a la belleza y solemnidad de las misas.
              </motion.p>
              <motion.button
                className="bg-yellow-400 text-black text-xl font-semibold px-12 py-4 rounded-xl hover:bg-yellow-500 transition mb-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: "easeOut", delay: 0.3 }}
                viewport={{ once: false }}
              >
                Más información
              </motion.button>
            </motion.div>
            {/* Card 9 */}
            <motion.div
              className="flex flex-col items-center bg-white rounded-[2rem] shadow-lg p-0 w-full max-w-xl"
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.8 }}
              viewport={{ once: false }}
            >
              <motion.img
                src={require('../assets/groups/cristo-amigo/photo1.jpg')}
                alt="Grupo 9"
                className="rounded-[2rem] w-full h-[320px] object-cover mb-8"
                initial={{ scale: 0.95, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                viewport={{ once: false }}
              />
              <motion.h3
                className="text-3xl font-bold text-center mb-4 leading-tight"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
                viewport={{ once: false }}
              >
                Pastoral Social
              </motion.h3>
              <motion.p
                className="text-gray-500 text-center mb-6 text-lg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
                viewport={{ once: false }}
              >
                Este grupo, dedicado a promover la vivencia del Evangelio desde la Doctrina Social de la Iglesia con programas concretos que den testimonios del amor de Dios para transformar nuestra sociedad conforme al Reino de justicia, amor y paz.
              </motion.p>
              <motion.button
                className="bg-yellow-400 text-black text-xl font-semibold px-12 py-4 rounded-xl hover:bg-yellow-500 transition mb-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: "easeOut", delay: 0.3 }}
                viewport={{ once: false }}
              >
                Más información
              </motion.button>
            </motion.div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default Groups;