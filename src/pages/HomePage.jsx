import React from 'react';
import Navbar from '../components/Navbar';
import SearchForm from '../components/SearchForm';
import Footer from '../components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';


const HomePage = () => {
  return (
    <div>
      <Navbar />
      <div className="bg-cover bg-center h-96 flex items-center justify-center text-white"
           style={{ backgroundImage: 'url(https://www.shutterstock.com/image-photo/side-view-smart-handsome-adult-600nw-2240205649.jpg)' }}>
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
