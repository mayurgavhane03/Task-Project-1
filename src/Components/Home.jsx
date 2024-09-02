import React from 'react';

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-teal-400 text-white">
      <div className="text-center px-8 py-16">
        <h1 className="text-4xl sm:text-5xl font-extrabold mb-6">
          Welcome to Our World
        </h1>
        <p className="text-lg sm:text-xl mb-8 max-w-xl mx-auto">
          Discover a place where creativity meets passion. We provide top-notch services to help you achieve your dreams and bring your ideas to life.
        </p>
        <button className="bg-white text-blue-500 font-semibold px-6 py-3 rounded-full shadow-lg hover:bg-blue-100 hover:scale-105 transition duration-300">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Home;
