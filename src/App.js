import './App.css';
import React from 'react';
import { HashRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop'; 
import Header from './components/header';
import { motion } from "framer-motion";
import Footer from './components/footer';
import Nosotros from './components/Nosotros.jsx';
import Groups from './components/groups.jsx';
import History from './components/historia.jsx';
import Contact from './components/contacto.jsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import backgroundImage from './assets/background2.jpg';
import ModalServicio from './components/ModalServicio.jsx';
import cristoAmigoImage from './assets/groups/cristo-amigo/cristoAmigo.jpg';
import dinamicas from  './assets/groups/dinamicas/dinamicas.jpg';
import misas from './assets/services/misas.png';
import notaria from './assets/services/notaria.png';
import kermes from './assets/services/kermes.png';
import horasSantas from './assets/services/horas-santas.png';
import sacramentos from './assets/services/sacramentos.png';
import comunidad from './assets/services/comunidad.png';
import padreMariano from './assets/padres/padreMariano.jpg';
import padreLiberio from './assets/padres/padreLiberio.jpg';
import catequesisImage from './assets/groups/catequesis/catecismo.jpg';
import nosotros3 from './assets/nosotros/nosotros2.jpg'; // Ajusta la extensión si es diferente
function Home() { 
  const navigate = useNavigate(); 
  const [modalOpen, setModalOpen] = React.useState(false);
  const [servicioActual, setServicioActual] = React.useState(null);

  const abrirModal = (servicio) => {
    setServicioActual(servicio);
    setModalOpen(true);
  };

  const cerrarModal = () => setModalOpen(false);

  return (
    <div  >
      <Header />
      <div
  className="bg-cover bg-[center_right_30%] min-h-screen flex items-center justify-start"
  style={{ backgroundImage: `url(${backgroundImage})` }}
>
  <div className="p-8 md:p-16 lg:py-32 max-w-2xl bg-transparent rounded-xl">
   <motion.h1
  className="font-script italic text-white text-7xl sm:text-6xl md:text-7xl mb-2 drop-shadow-lg max-w-xs sm:max-w-lg md:max-w-2xl font-bold"
  initial={{ opacity: 0, x: -80 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ duration: 1, ease: "easeOut" }}
>
  Parroquia de
</motion.h1>
<motion.span
  className="block font-script italic text-white text-7xl sm:text-7xl md:text-9xl font-bold mb-4 drop-shadow-lg max-w-xs sm:max-w-lg md:max-w-2xl"
  initial={{ opacity: 0, x: -80 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
>
  El Señor de la <br /> Misericordia
</motion.span>
    <motion.p
        className="text-white text-3xl md:text-3xl mb-8 drop-shadow-lg"
        initial={{ opacity: 0, x: -80 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.6 }}
      >
        Somos una comunidad católica al servicio de la fe, la esperanza y la caridad.
      </motion.p>
    <motion.div
  className="flex gap-4"
  initial={{ opacity: 0, x: -80 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ duration: 1, ease: "easeOut", delay: 0.9 }}
>
</motion.div>
  </div>
</div>

<section className="w-full flex justify-center -mt-24 relative z-10">
  <div className="bg-white rounded-3xl shadow-2xl p-12 md:p-20 max-w-screen-xl w-full mx-4">
    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
      {/* Servicio 1 */}
      <motion.div
        className="flex flex-col items-center text-center"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
      >
        <img src={misas} alt="Misas dominicales" className="w-20 h-20 mb-4" />
        <h3 className="text-xl font-bold mb-2">Misas dominicales</h3>
        <p className="text-gray-600 mb-4">
          Celebración de la Eucaristía todos los domingos para toda la comunidad.
        </p>
        <button className="text-header font-semibold hover:underline" onClick={() => abrirModal('misas')}
        >Más información</button>
      </motion.div>
      {/* Servicio 2 */}
      <motion.div
        className="flex flex-col items-center text-center"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
      >
        <img src={notaria} alt="Notaría parroquial" className="w-20 h-240 mb-4" />
        <h3 className="text-xl font-bold mb-2">Notaría parroquial</h3>
        <p className="text-gray-600 mb-4">
          Trámites y documentos eclesiásticos para los fieles de la parroquia.
        </p>
        <button className="text-header font-semibold hover:underline"
        onClick={() => abrirModal('notaria')}>Más información</button>
      </motion.div>
      {/* Servicio 3 */}
      <motion.div
        className="flex flex-col items-center text-center"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.7, ease: "easeOut", delay: 0.3 }}
      >
        <img src={horasSantas} alt="Horas santas" className="w-20 h-20 mb-4" />
        <h3 className="text-xl font-bold mb-2">Horas santas</h3>
        <p className="text-gray-600 mb-4">
          Espacios de adoración y oración ante el Santísimo Sacramento.
        </p>
        <button className="text-header font-semibold hover:underline"
        onClick={() => abrirModal('horasSantas')}>Más información</button>
      </motion.div>
      {/* Servicio 4 */}
      <motion.div
        className="flex flex-col items-center text-center"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.7, ease: "easeOut", delay: 0.4 }}
      >
        <img src={sacramentos} alt="Sacramentos" className="w-20 h-20 mb-4" />
        <h3 className="text-xl font-bold mb-2">Sacramentos</h3>
        <p className="text-gray-600 mb-4">
          Bautizos, primeras comuniones, confirmaciones, matrimonios y más.
        </p>
        <button className="text-header font-semibold hover:underline"
        onClick={() => abrirModal('sacramentos')}>Más información</button>
      </motion.div>
      {/* Servicio 5 */}
      <motion.div
        className="flex flex-col items-center text-center"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.7, ease: "easeOut", delay: 0.5 }}
      >
        <img src={comunidad} alt="Comunidad parroquial" className="w-20 h-20 mb-4" />
        <h3 className="text-xl font-bold mb-2">Comunidad parroquial</h3>
        <p className="text-gray-600 mb-4">
          Espacios de encuentro, formación y servicio para toda la comunidad.
        </p>
        <button className="text-header font-semibold hover:underline"
        onClick={() => abrirModal('comunidad')}>Más información</button>
      </motion.div>
       {/* Servicio 5 */}
      <motion.div
        className="flex flex-col items-center text-center"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.7, ease: "easeOut", delay: 0.5 }}
      >
        <img src={kermes} alt="Kermes dominical" className="w-20 h-20 mb-4" />
        <h3 className="text-xl font-bold mb-2">Kermés dominical</h3>
        <p className="text-gray-600 mb-4">
            Convivencia dominical con antojitos mexicanos para fortalecer la comunidad parroquial.
        </p>
        <button className="text-header font-semibold hover:underline"
        onClick={() => abrirModal('kermes')}>Más información</button>
      </motion.div>
    </div>
  </div>
  
  
</section>
      <div className="bg-gray-100 flex flex-col items-center justify-center py-12 px-4">

<section className="w-full bg-white py-20">
  <div className="max-w-screen-2xl mx-auto px-0">
    <h2 className="text-5xl font-bold text-center mb-4">Grupos parroquiales</h2>
    <p className="text-xl text-gray-500 text-center mb-14">Conoce y participa en nuestros grupos de comunidad</p>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
      {/* Grupo 1 */}
      <motion.div
        className="bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
      >
        <img src={cristoAmigoImage} alt="Xto amigo" className="w-full h-56 sm:h-64 md:h-72 lg:h-80 object-cover" />
        <div className="p-8 flex-1 flex flex-col text-left">
          <h3 className="text-2xl font-bold mb-4">Xto amigo</h3>
          <p className="text-gray-600 text-lg mb-4 flex-1">
            Grupo de formación y encuentro con Cristo dirigido a adolescentes y jóvenes.
          </p>
        </div>
      </motion.div>
      {/* Grupo 2 */}
      <motion.div
        className="bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
      >
        <img src={catequesisImage} alt="Catequesis" className="w-full h-56 sm:h-64 md:h-72 lg:h-80 object-cover" />
        <div className="p-8 flex-1 flex flex-col text-left">
          <h3 className="text-2xl font-bold mb-4">Catequesis</h3>
          <p className="text-gray-600 text-lg mb-4 flex-1">
            Preparación espiritual para recibir el sacramento de la Confirmación.
          </p>
        </div>
      </motion.div>
      {/* Grupo 3 */}
      <motion.div
        className="bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.7, ease: "easeOut", delay: 0.3 }}
      >
        <img src={dinamicas} alt="Dinámicas" className="w-full h-56 sm:h-64 md:h-72 lg:h-80 object-cover " />
        <div className="p-8 flex-1 flex flex-col text-left">
          <h3 className="text-2xl font-bold mb-4">Dinámicas matrimoniales</h3>
          <p className="text-gray-600 text-lg mb-4 flex-1">
            Actividades interactivas para fomentar la integración, la reflexión y el aprendizaje comunitario.
          </p>
        </div>
      </motion.div>
    </div>
    <div className="mt-10 flex justify-end">
          <button className="bg-header text-md text-white font-bold px-8 py-2 rounded-lg hover:bg-red-800" onClick={() => navigate('/grupos')}>
            Ver más
          </button>
    </div>
  </div>
</section>
        
<section className="w-full flex justify-center py-24 bg-gray-100">
  <div className="max-w-screen-2xl w-full flex flex-col md:flex-row rounded-3xl overflow-hidden shadow-2xl min-h-[600px]">
    {/* Imagen */}
    <div className="md:w-1/2 w-full md:h-[1000px] h-96">
      <img
        src={nosotros3}
        alt="Nosotros"
        className="w-full h-full object-cover md:rounded-l-3xl md:rounded-r-none rounded-t-3xl md:rounded-t-none"
      />
    </div>
    {/* Contenido */}
    <div className="md:w-1/2 w-full bg-footer p-20 flex flex-col justify-center md:rounded-r-3xl md:rounded-l-none rounded-b-3xl md:rounded-b-none">
      <motion.h2
        className="font-bold mb-8 md:mb-12 leading-tight text-3xl md:text-5xl lg:text-6xl"
        initial={{ opacity: 0, x: 120 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: false }}
      >
        ¿Cómo transformamos vidas en la comunidad?
      </motion.h2>
      <motion.div
        className="mb-10"
        initial={{ opacity: 0, x: 120 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        viewport={{ once: false }}
      >
        <h3 className="text-3xl font-bold mb-3">Formación</h3>
        <p className="text-gray-700 text-xl">
          Ofrecemos espacios de formación cristiana y humana para niños, jóvenes y adultos, fortaleciendo los valores y la fe.
        </p>
      </motion.div>
      <motion.div
        className="mb-14"
        initial={{ opacity: 0, x: 120 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
        viewport={{ once: false }}
      >
        <h3 className="text-3xl font-bold mb-3">Solidaridad</h3>
        <p className="text-gray-700 text-xl">
          Promovemos la ayuda mutua y el acompañamiento a quienes más lo necesitan dentro y fuera de nuestra parroquia.
        </p>
      </motion.div>
      <motion.div
        className="flex gap-6"
        initial={{ opacity: 0, x: 120 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
        viewport={{ once: true }}
      >
        <button className="bg-white text-black text-xl font-bold px-12 py-5 rounded-lg hover:bg-gray-100 transition border border-gray-200 shadow" onClick={() => navigate('/nosotros')}>
          Conoce más
        </button>
      </motion.div>
    </div>
  </div>
</section>
    <ModalServicio open={modalOpen} onClose={cerrarModal} servicio={servicioActual} />   
         <section className="w-full py-24 bg-white">
  <div className="max-w-screen-xl mx-auto px-4">
    <h2 className="text-5xl font-bold text-center mb-4">Nuestros sacerdotes</h2>
    <p className="text-xl text-gray-500 text-center mb-14">Conoce a quienes guían nuestra comunidad</p>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 justify-items-center">
      <motion.div
        className="flex flex-col items-center"
        initial={{ opacity: 0, rotateY: -90 }}
        whileInView={{ opacity: 1, rotateY: 0 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        viewport={{ once: false }}
        style={{ transformStyle: "preserve-3d" }}
      >
        <img
          src={padreMariano}
          alt="Padre Mariano"
          className="w-[28rem] h-[32rem] object-cover rounded-2xl mb-6 shadow-lg"
        />
        <h3 className="text-3xl font-bold mb-2">Pbro. Mariano</h3>
        <p className="text-gray-600 text-lg">Párroco</p>
      </motion.div>
      <motion.div
        className="flex flex-col items-center"
        initial={{ opacity: 0, rotateY: 90 }}
        whileInView={{ opacity: 1, rotateY: 0 }}
        transition={{ duration: 0.9, ease: "easeOut", delay: 0.2 }}
        viewport={{ once: false }}
        style={{ transformStyle: "preserve-3d" }}
      >
        <img
          src={padreLiberio}
          alt="Padre Liberio"
          className="w-[28rem] h-[32rem] object-cover rounded-2xl mb-6 shadow-lg"
        />
        <h3 className="text-3xl font-bold mb-2">Pbro. Liberio</h3>
        <p className="text-gray-600 text-lg">Auxiliar</p>
      </motion.div>
    </div>
  </div>
</section>

<section className="w-full py-24 bg-white/80">
  <div className="max-w-screen-2xl mx-auto px-0">
    <h2 className="text-5xl font-bold text-center mb-4">Testimonios</h2>
    <p className="text-xl text-gray-600 text-center mb-14">Lo que dicen los miembros de nuestra comunidad</p>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
      {/* Testimonio 1 */}
      <motion.div
        className="rounded-[2.5rem] bg-footer px-12 py-14 flex flex-col items-center shadow-lg w-full min-h-[370px]"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        viewport={{ once: false }}
      >
        <p className="text-lg text-gray-700 text-center mb-8">
          "Un templo muy bonito, las misas muy bonitas, la comida que a veces venden esta riquísima, el lugar muy limpio."
        </p>
        <FontAwesomeIcon icon={faUser} className="text-7xl text-header mb-4" />
        <h3 className="text-xl font-bold text-header">Ian Castell</h3>
        <span className="text-gray-500">Ciudadano</span>
      </motion.div>
      {/* Testimonio 2 */}
      <motion.div
        className="rounded-[2.5rem] bg-footer px-12 py-14 flex flex-col items-center shadow-lg w-full min-h-[370px]"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
        viewport={{ once: false }}
      >
        <p className="text-lg text-gray-700 text-center mb-8">
          "De arquitectura contemporánea, de reciente construcción, amplio y luminoso, con acceso para discapacitados, buen espacio."
        </p>
        <FontAwesomeIcon icon={faUser} className="text-7xl text-header mb-4" />
        <h3 className="text-xl font-bold text-header">José Leonel Pérez Rodríguez</h3>
        <span className="text-gray-500">Ciudadano</span>
      </motion.div>
      {/* Testimonio 3 */}
      <motion.div
        className="rounded-[2.5rem] bg-footer px-12 py-14 flex flex-col items-center shadow-lg w-full min-h-[370px]"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut", delay: 0.4 }}
        viewport={{ once: false }}
      >
        <p className="text-lg text-gray-700 text-center mb-8">
          "Me gusta mucho y más el grupo juvenil Xto Amigo, que hace muchas actividades y conviven sanamente"
        </p>
        <FontAwesomeIcon icon={faUser} className="text-7xl text-header mb-4" />
        <h3 className="text-xl font-bold text-header">Ere Cortez</h3>
        <span className="text-gray-500">Ex asesora Xto Amigo</span>
      </motion.div>
    </div>
  </div>
</section>
      </div>
      <Footer />
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-6 right-6 z-50 bg-header text-white rounded-full shadow-lg p-4 hover:bg-red-800 transition"
        aria-label="Volver arriba"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
        </svg>
      </button>
    </div>
  );
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/nosotros" element={<Nosotros />} />
        <Route path="/grupos" element={<Groups />} />
        <Route path="/historia" element={<History />} />
        <Route path="/contacto" element={<Contact />} />
      </Routes>
    </Router>
  );
}



export default App;