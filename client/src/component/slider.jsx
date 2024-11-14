import React, { useState } from 'react';
import ToDoCard from './todo';
import Onprocess from './onprocess';
import Completed from './completed';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid'; // Arrow icons

const TaskSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    { title: "To Do", component: <ToDoCard /> },
    { title: "In Progress", component: <Onprocess /> },
    { title: "Completed", component: <Completed /> },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <>
      <div className="grid grid-cols-12 items-center">
        {/* Left arrow for slider */}
        <div className="col-span-2 flex justify-center">
          <button onClick={prevSlide}>
            <ChevronLeftIcon className="h-8 w-8 text-gray-500" />
          </button>
        </div>

        {/* Slider component */}
        <div className="col-span-8 bg-gray-400 p-4 rounded-md shadow-md">
          
          {slides[currentSlide].component}
        </div>

        {/* Right arrow for slider */}
        <div className="col-span-2 flex justify-center">
          <button onClick={nextSlide}>
            <ChevronRightIcon className="h-8 w-8 text-gray-500" />
          </button>
        </div>
      </div>

      {/* Buttons for directly selecting a slide */}
      <div className="flex justify-center space-x-4 mt-4">
        <button
          onClick={() => goToSlide(0)}
          className={`py-2 px-4 rounded ${currentSlide === 0 ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
        >
          To Do
        </button>
        <button
          onClick={() => goToSlide(1)}
          className={`py-2 px-4 rounded ${currentSlide === 1 ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
        >
          In Progress
        </button>
        <button
          onClick={() => goToSlide(2)}
          className={`py-2 px-4 rounded ${currentSlide === 2 ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
        >
          Completed
        </button>
      </div>
    </>
  );
};

export default TaskSlider;
