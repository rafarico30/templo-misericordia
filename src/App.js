import './App.css';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Importa el componente
import { faBoxesStacked } from '@fortawesome/free-solid-svg-icons'; // Importa el icono
import Header from './components/header';
import Footer from './components/footer';

function App() {
  return (
   <div>
    <Header />
    <div className='bg-gray-100 min-h-screen flex items-center justify-center'> 

    </div>
    <Footer />
   </div>
  );
}

export default App;