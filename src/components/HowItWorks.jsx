import React from 'react';

const HowItWorks = () => {
  const steps = [
    "Search Flights",
    "Fill Contact Form",
    "Choose Your Airline",
    "Booking in 10 Minutes!",
  ];

  return (
    <div className="mt-12 text-center">
      <h2 className="text-3xl font-bold mb-6">How it Works</h2>
      <p className="text-gray-600 mb-10">
        Follow these simple steps to book your next trip quickly and easily.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {steps.map((step, index) => (
          <div key={index} className="flex flex-col items-center">
            <div className="w-16 h-16 bg-pink-600 text-white flex items-center justify-center rounded-full text-xl font-bold">
              {index + 1}
            </div>
            <p className="mt-4">{step}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HowItWorks;
