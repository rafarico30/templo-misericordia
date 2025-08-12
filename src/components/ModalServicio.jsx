import React from "react";
import { motion, AnimatePresence } from "framer-motion";

const serviciosInfo = {
  misas: {
    titulo: "Misas dominicales",
    descripcion: "Celebración de la Eucaristía todos los domingos para toda la comunidad.",
    detalles: "Horarios: 8:00, 10:00, 12:00 y 19:00 hrs. Consulta requisitos para intenciones y participación especial en la oficina parroquial."
  },
  notaria: {
    titulo: "Notaría parroquial",
    descripcion: "Trámites y documentos eclesiásticos para los fieles de la parroquia.",
    detalles: "Actas de bautismo, confirmación, matrimonio, constancias y otros servicios notariales."
  },
  horasSantas: {
    titulo: "Horas santas",
    descripcion: "Espacios de adoración y oración ante el Santísimo Sacramento.",
    detalles: "Todos los jueves a las 18:00 hrs. Abierto a toda la comunidad."
  },
  sacramentos: {
    titulo: "Sacramentos",
    descripcion: "Bautizos, primeras comuniones, confirmaciones, matrimonios y más.",
    detalles: "Infórmate sobre requisitos y fechas en la oficina parroquial."
  },
  comunidad: {
    titulo: "Comunidad parroquial",
    descripcion: "Espacios de encuentro, formación y servicio para toda la comunidad.",
    detalles: "Participa en grupos, talleres y actividades de integración."
  },
  kermes: {
  titulo: "Kermés dominical",
  descripcion: "Convivencia dominical con antojitos mexicanos para fortalecer la comunidad parroquial.",
  detalles: "Gracias al esfuerzo y cariño de las organizadoras de los grupos parroquiales, las kermeses dominicales son un espacio de encuentro, alegría y servicio para toda la comunidad."
}
};

export default function ModalServicio({ open, onClose, servicio }) {
  const info = serviciosInfo[servicio];
  return (
    <AnimatePresence>
      {open && (
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