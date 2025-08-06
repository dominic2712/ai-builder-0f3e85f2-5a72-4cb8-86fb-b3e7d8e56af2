import React from 'react';
import Navbar from '../components/Navbar';

const Home: React.FC = () => {
  return (
    <div>
      <Navbar />
      <div className="container mx-auto p-4">
        <h1 className="text-4xl font-bold text-center">Welcome to the Future of AI</h1>
        <p className="mt-4 text-center text-gray-700">Explore the endless possibilities that AI brings to the future.</p>
      </div>
    </div>
  );
};

export default Home;