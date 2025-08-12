import React from 'react';
import Header from './header';
import Footer from './footer';
import { motion } from 'framer-motion';
import ModalGrupos from './ModalGrupos.jsx';

function Groups() {

const [modalOpen, setModalOpen] = React.useState(false);
const [grupoActual, setGrupoActual] = React.useState(null);

  const abrirModal = (grupo) => {
  setGrupoActual(grupo);
  setModalOpen(true);
};
const cerrarModal = () => setModalOpen(false);


  return (
    <div className="overflow-x-hidden">
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
        <div className="container mx-auto px-4 sm:px-6 md:px-12 lg:px-20 xl:px-24">
          <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-3 justify-items-center items-stretch">
            {/* Catequesis */}
            <motion.div
              className="flex flex-col justify-between items-center bg-white rounded-[2rem] shadow-lg p-0 w-full max-w-xl h-full"
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              viewport={{ once: false }}
              onClick={() => abrirModal('catequesis')} 
            >
              <motion.img
                src={require('../assets/groups/catequesis/catecismo.jpg')}
                alt="Grupo 1"
                className="rounded-[2rem] h-auto max-h-[320px] sm:h-[300px] md:h-[320px] object-cover mb-8"
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
                className="bg-yellow-400 text-black text-xl font-semibold px-6 sm:px-8 md:px-12 py-3 sm:py-4 rounded-xl hover:bg-yellow-500 transition mb-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: "easeOut", delay: 0.3 }}
                viewport={{ once: false }}
              >
                Más información
              </motion.button>
            </motion.div>

            {/* Cen Oracion */}
            <motion.div
              className="flex flex-col justify-between items-center bg-white rounded-[2rem] shadow-lg p-0 w-full max-w-xl h-full"
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
              viewport={{ once: false }}
              onClick={() => abrirModal('cenaculos')} 
            >
              <motion.img
                src={require('../assets/groups/cenOracion/cenOracion.jpg')}
                alt="Grupo 2"
                className="rounded-[2rem] h-auto max-h-[320px] sm:h-[300px] md:h-[320px] object-cover mb-8"
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
                className="bg-yellow-400 text-black text-xl font-semibold px-6 sm:px-8 md:px-12 py-3 sm:py-4 rounded-xl hover:bg-yellow-500 transition mb-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: "easeOut", delay: 0.3 }}
                viewport={{ once: false }}
              >
                Más información
              </motion.button>
            </motion.div>

            {/* Kermes */}
            <motion.div
              className="flex flex-col justify-between items-center bg-white rounded-[2rem] shadow-lg p-0 w-full max-w-xl h-full"
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
              viewport={{ once: false }}
              onClick={() => abrirModal('kermes')} 
            >
              <motion.img
                src={require('../assets/groups/kermes/kermess.jpg')}
                alt="Grupo 3"
                className="rounded-[2rem] h-auto max-h-[320px] sm:h-[300px] md:h-[320px] object-cover mb-8"
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
                Coordinadoras de kermés
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
                className="bg-yellow-400 text-black text-xl font-semibold px-6 sm:px-8 md:px-12 py-3 sm:py-4 rounded-xl hover:bg-yellow-500 transition mb-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: "easeOut", delay: 0.3 }}
                viewport={{ once: false }}
              >
                Más información
              </motion.button>
            </motion.div>

            {/* Cristo Amigo */}
            <motion.div
              className="flex flex-col justify-between items-center bg-white rounded-[2rem] shadow-lg p-0 w-full max-w-xl h-full"
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.3 }}
              viewport={{ once: false }}
              onClick={() => abrirModal('cristoAmigo')} 
            >
              <motion.img
                src={require('../assets/groups/cristo-amigo/cristoAmigo.jpg')}
                alt="Grupo 4"
                className="rounded-[2rem] h-auto max-h-[320px] sm:h-[300px] md:h-[320px] object-cover mb-8"
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
              <motion.button
                className="bg-yellow-400 text-black text-xl font-semibold px-6 sm:px-8 md:px-12 py-3 sm:py-4 rounded-xl hover:bg-yellow-500 transition mb-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: "easeOut", delay: 0.3 }}
                viewport={{ once: false }}
              >
                Más información
              </motion.button>
            </motion.div>

            {/* Dinamicas */}
            <motion.div
              className="flex flex-col justify-between items-center bg-white rounded-[2rem] shadow-lg p-0 w-full max-w-xl h-full"
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.4 }}
              viewport={{ once: false}}
              onClick={() => abrirModal('dinamicas')} 
            >
              <motion.img
                src={require('../assets/groups/dinamicas/dinamicas.jpg')}
                alt="Grupo 5"
                className="rounded-[2rem] h-auto max-h-[320px] sm:h-[300px] md:h-[320px] object-cover mb-8"
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
                className="bg-yellow-400 text-black text-xl font-semibold px-6 sm:px-8 md:px-12 py-3 sm:py-4 rounded-xl hover:bg-yellow-500 transition mb-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: "easeOut", delay: 0.3 }}
                viewport={{ once: false }}
              >
                Más información
              </motion.button>
            </motion.div>

            {/* Escuela de pastoral */}
            <motion.div
              className="flex flex-col justify-between items-center bg-white rounded-[2rem] shadow-lg p-0 w-full max-w-xl h-full"
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.5 }}
              viewport={{ once: false }}
              onClick={() => abrirModal('pastoral')} 
            >
              <motion.img
                src={require('../assets/groups/escPastoral/escPastoral.jpg')}
                alt="Grupo 6"
                className="rounded-[2rem] h-auto max-h-[320px] sm:h-[300px] md:h-[320px] object-cover mb-8"
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
                className="bg-yellow-400 text-black text-xl font-semibold px-6 sm:px-8 md:px-12 py-3 sm:py-4 rounded-xl hover:bg-yellow-500 transition mb-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: "easeOut", delay: 0.3 }}
                viewport={{ once: false }}
              >
                Más información
              </motion.button>
            </motion.div>

            {/* Liturgia*/}
            <motion.div
              className="flex flex-col justify-between items-center bg-white rounded-[2rem] shadow-lg p-0 w-full max-w-xl h-full"
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.6 }}
              viewport={{ once: false }}
              onClick={() => abrirModal('liturgia')} 
            >
              <motion.img
                src={require('../assets/groups/liturgia/liturgia.jpg')}
                alt="Grupo 7"
                className="rounded-[2rem] h-auto max-h-[320px] sm:h-[300px] md:h-[320px] object-cover mb-8"
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
                className="bg-yellow-400 text-black text-xl font-semibold px-6 sm:px-8 md:px-12 py-3 sm:py-4 rounded-xl hover:bg-yellow-500 transition mb-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: "easeOut", delay: 0.3 }}
                viewport={{ once: false }}
              >
                Más información
              </motion.button>
            </motion.div>

            {/* Monaguillos */}
            <motion.div
              className="flex flex-col justify-between items-center bg-white rounded-[2rem] shadow-lg p-0 w-full max-w-xl h-full"
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.7 }}
              viewport={{ once: false }}
              onClick={() => abrirModal('monaguillos')} 
            >
              <motion.img
                src={require('../assets/groups/monaguillos/monaguillos.jpg')}
                alt="Grupo 8"
                className="rounded-[2rem] h-auto max-h-[320px] sm:h-[300px] md:h-[320px] object-cover mb-8"
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
                className="bg-yellow-400 text-black text-xl font-semibold px-6 sm:px-8 md:px-12 py-3 sm:py-4 rounded-xl hover:bg-yellow-500 transition mb-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: "easeOut", delay: 0.3 }}
                viewport={{ once: false }}
              >
                Más información
              </motion.button>
            </motion.div>

            {/* Pastoral social */}
            <motion.div
              className="flex flex-col justify-between items-center bg-white rounded-[2rem] shadow-lg p-0 w-full max-w-xl h-full"
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.8 }}
              viewport={{ once: false }}
              onClick={() => abrirModal('pastoralSocial')} 
            >
                <motion.img
                src={require('../assets/groups/pastoralSocial/pastoralSocial.jpg')}
                alt="Grupo 9"
                className="rounded-[2rem] h-auto max-h-[320px] sm:h-[300px] md:h-[320px] object-cover mb-8"
                initial={{ scale: 0.95, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                viewport={{ once: false }}
              />
              <motion.h3
                className="text-3xl font-bold text-center mb-4 leading-tight "
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
                className="bg-yellow-400 text-black text-xl font-semibold px-6 sm:px-8 md:px-12 py-3 sm:py-4 rounded-xl hover:bg-yellow-500 transition mb-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: "easeOut", delay: 0.3 }}
                viewport={{ once: false }}
              >
                Más información
              </motion.button>
            </motion.div>
            

               {/* Ministros */}
            <motion.div
              className="flex flex-col justify-between items-center bg-white rounded-[2rem] shadow-lg p-0 w-full max-w-xl h-full"
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.8 }}
              viewport={{ once: false }}
              onClick={() => abrirModal('ministros')} 
            >
                <motion.img
                src={require('../assets/groups/ministros/ministros.jpg')}
                alt="Grupo 10"
                className="rounded-[2rem] h-auto max-h-[320px] sm:h-[300px] md:h-[320px] object-cover mb-8"
                initial={{ scale: 0.95, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                viewport={{ once: false }}
              />
              <motion.h3
                className="text-3xl font-bold text-center mb-4 leading-tight "
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
                viewport={{ once: false }}
              >
                Ministros Extraordinarios de la Comunión
              </motion.h3>
              <motion.p
                className="text-gray-500 text-center mb-6 text-lg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
                viewport={{ once: false }}
              >
               Los Ministros Extraordinarios de la Comunión tienen como objetivo principal asistir a nuestros sacerdotes y diáconos en la distribución de la Sagrada Comunión, garantizando que la Eucaristía llegue a todos los fieles.
              </motion.p>
              <motion.button
                className="bg-yellow-400 text-black text-xl font-semibold px-6 sm:px-8 md:px-12 py-3 sm:py-4 rounded-xl hover:bg-yellow-500 transition mb-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: "easeOut", delay: 0.3 }}
                viewport={{ once: false }}
              >
                Más información
              </motion.button>
            </motion.div>


    {/* Consejo */}
            <motion.div
              className="flex flex-col justify-between items-center bg-white rounded-[2rem] shadow-lg p-0 w-full max-w-xl h-full"
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.8 }}
              viewport={{ once: false }}
              onClick={() => abrirModal('consejo')} 
            >
                <motion.img
                src={require('../assets/groups/consejo/consejo.jpg')}
                alt="Grupo 11"
                className="rounded-[2rem] h-auto max-h-[320px] sm:h-[300px] md:h-[320px] object-cover mb-8"
                initial={{ scale: 0.95, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                viewport={{ once: false }}
              />
              <motion.h3
                className="text-3xl font-bold text-center mb-4 leading-tight "
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
                viewport={{ once: false }}
              >
                Consejo Parroquial
              </motion.h3>
              <motion.p
                className="text-gray-500 text-center mb-6 text-lg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
                viewport={{ once: false }}
              >
               Como pilar de la vida parroquial en la Iglesia Católica, el Consejo Parroquial es el espacio donde los fieles participan activamente en la planificación pastoral. 
                 </motion.p>
              <motion.button
                className="bg-yellow-400 text-black text-xl font-semibold px-6 sm:px-8 md:px-12 py-3 sm:py-4 rounded-xl hover:bg-yellow-500 transition mb-8"
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
      <ModalGrupos open={modalOpen} onClose={cerrarModal} grupo={grupoActual} />
    </div>
  );
}

export default Groups;