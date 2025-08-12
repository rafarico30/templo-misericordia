import React, { useEffect } from "react";

const Modal = ({ isOpen, onClose, title, content }) => {
  // Bloquea el scroll del body cuando el modal está abierto
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
    // Limpia al desmontar
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 overflow-y-auto">
      <div className="bg-white rounded-lg shadow-lg w-11/12 max-w-md p-6 my-8 max-h-[90vh] flex flex-col">
        <div className="flex justify-between items-center border-b pb-2">
          <h2 className="text-lg font-semibold">{title}</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 focus:outline-none"
          >
            ✕
          </button>
        </div>
        <div className="mt-4 overflow-y-auto flex-1">
          <p className="text-gray-700">{content}</p>
        </div>
        <div className="mt-6 text-right">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none"
          >
            Cerrar
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;