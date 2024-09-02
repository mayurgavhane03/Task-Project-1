import React from 'react';

const About = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-blue-100">
      <div className="bg-white p-8 rounded-lg shadow-md max-w-md text-center">
        <h1 className="text-2xl font-bold mb-4">About Us</h1>
        <p className="text-gray-700 mb-6">
          Welcome to our website! We are dedicated to providing the best service to our customers. Our team is passionate about delivering high-quality products and exceptional customer support.
        </p>
        <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
          Learn More
        </button>
      </div>
    </div>
  );
};

export default About;
