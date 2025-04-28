import React, { useState, useEffect } from 'react';
import photo1 from '../assets/history/photo1.jpg';
import photo2 from '../assets/history/photo2.jpg';
import photo3 from '../assets/history/photo3.jpg';

const carouselItems = [
  {
    image: photo1,
    title: "Lorem Ipsum",
    description: "Lorem ipsum dolor sit amet consectetur adipiscing",
  },
  {
    image: photo2,
    title: "Lorem Ipsum",
    description: "Lorem ipsum dolor sit amet consectetur adipiscing",
  },
  {
    image: photo3,
    title: "Lorem Ipsum",
    description: "Lorem ipsum dolor sit amet consectetur adipiscing",
  },
];

function Carousel() {
  const [current, setCurrent] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  useEffect(() => {
    const interval = setInterval(() => {
      handleNextSlide();
    }, 5000); 

    return () => clearInterval(interval);
  }, []);

  const handleNextSlide = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrent((prev) => (prev + 1) % carouselItems.length);
        setIsAnimating(false);
      }, 500);
    }
  };

  const handlePrevSlide = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrent((prev) => (prev - 1 + carouselItems.length) % carouselItems.length);
        setIsAnimating(false);
      }, 500); 
    }
  };

  return (
    <div className="relative w-full max-w-3xl mx-auto mt-16 rounded-xl overflow-hidden border-4 border-gray-100 shadow-xl">
      <div
        className={`w-full h-[480px] flex transition-transform duration-500 ease-in-out`}
        style={{
          transform: `translateX(-${current * 100}%)`,
        }}
      >
        {carouselItems.map((item, index) => (
          <img
            key={index}
            src={item.image}
            alt={item.title}
            className="w-full h-full object-cover flex-shrink-0"
          />
        ))}
      </div>

      {/* Overlay de texto */}
      <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 text-center text-white px-4">
        <h3 className="text-2xl font-bold drop-shadow-lg">{carouselItems[current].title}</h3>
        <p className="text-md mt-2 drop-shadow-lg">{carouselItems[current].description}</p>
      </div>

      {/* Botones */}
      <button
        onClick={handlePrevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-70 hover:bg-opacity-100 text-black p-3 rounded-full shadow"
      >
        ←
      </button>
      <button
        onClick={handleNextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-70 hover:bg-opacity-100 text-black p-3 rounded-full shadow"
      >
        →
      </button>

      {/* Indicadores (dots) */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {carouselItems.map((_, index) => (
          <div
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full cursor-pointer ${
              index === current ? 'bg-white' : 'bg-white/40'
            }`}
          />
        ))}
      </div>
    </div>
  );
}

export default Carousel;