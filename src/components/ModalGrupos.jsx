import { AnimatePresence, motion } from "framer-motion";

const gruposInfo = {
  catequesis: {
    titulo: "Catequesis",
    descripcion: "El grupo de catequesis de la parroquia, busca primeramente formar a los niños y a sus papás en la fe cristiana, ayudándoles a conocer, amar y seguir a Jesucristo.",
    detalles: "El grupo está conformado por catequistas de corazón inigualable, quienes han dedicado gran parte de su vida a esta hermosa misión, logrando crear un ambiente donde los niños pueden crecer en su fe. Y donde algunos, han estado presentes en este ministerio de la parroquia, incluso, desde que se erigió."
  },
  cenaculos: {
    titulo: "Cenáculos de oración",
    descripcion: "Oración y reflexión comunitaria de la Palabra de Dios.",
    detalles: "Este grupo tiene como objetivo principal fomentar una experiencia personal y comunitaria de Dios a través de la oración y la reflexión de la Palabra de Dios en nuestra parroquia, cuidando de modo especial fomentar la devoción al Señor de la Misericordia."
  },
  kermes: {
    titulo: "Coordinadoras de kermés",
    descripcion: "Las coordinadoras de kermés son el corazón material y social de nuestra parroquia.",
    detalles: "Desde su fundación, han sido las encargadas de crear un ambiente cálido y familiar a través de deliciosas comidas y actividades comunitarias. Su labor, marcada por la fe y la entrega a Dios y a la comunidad, ha sido fundamental para fortalecer los lazos entre los feligreses y grupos de la parroquia. Gracias a su iniciativa y dedicación, las kermeses se han convertido en una tradición arraigada, que ha evolucionado a lo largo de los años, siempre con el objetivo de servir y evangelizar mejor."
  },
  cristoAmigo: {
    titulo: "Cristo Amigo",
    descripcion: "Fundado en 1998 por Mons. Francisco Moreno Barrón, el grupo juvenil de nuestra parroquia ha sido un espacio de encuentro y crecimiento espiritual para jóvenes y adolescentes.",
    detalles: "Desde sus inicios en el salón anexo de la Rectoría del Espíritu Santo, el grupo se ha adaptado a las necesidades de cada generación, consolidándose como un pilar fundamental de nuestra comunidad parroquial. Gracias al apoyo del Pbro. Mariano Colín, el grupo se integró formalmente a la parroquia, fortaleciendo aún más su misión evangelizadora."
  },
  dinamicas: {
    titulo: "Dinámicas matrimoniales",
    descripcion: "Apoyo y formación para matrimonios.",
    detalles: "Su misión es servir,  compartir, convivir y recibir a los matrimonios que sufren desintegración, concientizándolos del amor de Dios, reviviendo los valores y solidaridad en familia, brindando la oportunidad de una nueva vida al lado de Jesús, en beneficio de sus hijos, integrados a la comunidad parroquial para la comunión de la Iglesia. "
  },
  pastoral: {
    titulo: "Escuela de Pastoral",
    descripcion: "Formación integral para laicos comprometidos.",
    detalles: "La Escuela de Pastoral perteneciente al IFLSPP (Instituto de Formación para Laicos al Servicio de la Pastoral Parroquial) tiene como misión principal formar laicos comprometidos con la Iglesia, brindándoles una formación integral que les permita crecer espiritualmente y adquirir las herramientas necesarias para ser agentes activos de evangelización. A través de esta formación, los laicos se capacitan para compartir su fe y servir a sus comunidades, contribuyendo así a la construcción de un mundo más justo y fraterno."
  },
  liturgia: {
    titulo: "Liturgia",
    descripcion: "Participación activa en la celebración litúrgica.",
    detalles: "La liturgia es el conjunto de acciones, palabras y objetos que se utilizan para rendir culto a Dios. El grupo de Liturgia de la parroquia tiene varios propósitos: santificar a las personas, edificar el pueblo de Dios y adorar al Señor a través de una participación gozosa y comunitaria. Es un grupo que se forma adecuadamente en el ser y quehacer de su ministerio, acudiendo a pláticas, talleres, retiros relacionados con la liturgia, para poder preparar debidamente cada celebración, evangelizando a través de ella y con un buen testimonio."
  },
  monaguillos: {
    titulo: "Monaguillos",
    descripcion: "Servicio en el altar y apoyo en las celebraciones.",
    detalles: "El grupo de monaguillos desempeña un papel fundamental en la liturgia de la Iglesia. Su misión principal es asistir al sacerdote durante las celebraciones, contribuyendo a la belleza y solemnidad de las misas. Sus funciones son variadas y enriquecen significativamente la experiencia litúrgica para toda la comunidad. En el grupo, conformado por niños y adolescentes, se aprende a servir en la Santa Misa como el Señor nos enseña y nos sirve a cada uno."
  },
  pastoralSocial: {
    titulo: "Pastoral Social",
    descripcion: "Acción social y caritativa en la comunidad.",
    detalles: "Este grupo está dedicado a promover la vivencia del Evangelio desde la Doctrina Social de la Iglesia, a través de programas concretos que den testimonio del amor de Dios, con el objetivo de ir transformando nuestra sociedad conforme al Reino de justicia, amor y paz."
  },

  ministros: {
    titulo: "Ministros Extraordinarios de la Comunión",
    descripcion: "Servicio de apoyo en la distribución de la Sagrada Comunión.",
    detalles: "Los Ministros Extraordinarios de la Comunión tienen como objetivo principal asistir a nuestros sacerdotes y diáconos en la distribución de la Sagrada Comunión, garantizando que la Eucaristía llegue a todos los fieles. En la liturgia, agilizan el proceso para que más personas reciban a Cristo Sacramentado; y fuera de ella, llevan la Comunión a quienes, por enfermedad, edad avanzada o alguna limitación, no pueden asistir a la iglesia. Este ministerio, de carácter extraordinario, complementa la labor de los ministros ordinarios sin suplantar sus funciones propias, constituyendo un apoyo fundamental para que la Eucaristía, centro de la vida cristiana, sea accesible al mayor número de fieles."
  },
    consejo: {
    titulo: "Consejo Parroquial",
    descripcion: "Órgano consultivo y de participación de los fieles en la vida parroquial.",
    detalles: "Como pilar de la vida parroquial en la Iglesia Católica, el Consejo Parroquial es el espacio donde los fieles participan activamente en la planificación pastoral. Funciona como un órgano esencial de comunión y corresponsabilidad entre el párroco y los laicos que coordinan los diversos grupos y ministerios, todo ello orientado a la consecución de la misión evangelizadora de la Iglesia en su comunidad."
  },
};

export default function ModalGrupos({ open, onClose, grupo }) {
  const info = gruposInfo[grupo];
  return (
    <AnimatePresence>
      {open && info && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="bg-white rounded-3xl shadow-2xl p-8 max-w-md w-full relative mx-4"
            initial={{ scale: 0.8, y: 80, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            exit={{ scale: 0.8, y: 80, opacity: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
          >
            <button
              className="absolute top-4 right-4 text-gray-400 hover:text-header text-3xl font-bold"
              onClick={onClose}
              aria-label="Cerrar"
            >
              ×
            </button>
            <h2 className="text-3xl font-bold mb-2 text-header">{info.titulo}</h2>
            <p className="mb-2 text-lg text-gray-700">{info.descripcion}</p>
            <p className="text-gray-500">{info.detalles}</p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}