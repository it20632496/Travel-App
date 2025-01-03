import React from 'react';
import Navbar from '../components/Navbar';
import SearchForm from '../components/SearchForm';
import Footer from '../components/Footer';

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <div className="bg-cover bg-center h-96 flex items-center justify-center text-white"
           style={{ backgroundImage: 'url(/images/hero.jpg)' }}>
        <h1 className="text-4xl font-bold">Explore the World with Premium Travel</h1>
      </div>
      <div className="p-8">
        <SearchForm />
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
