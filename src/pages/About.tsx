import React from 'react';
import Navbar from '../components/Navbar';

const About: React.FC = () => {
  return (
    <div>
      <Navbar />
      <div className="container mx-auto p-4">
        <h1 className="text-4xl font-bold text-center">About AI & Future</h1>
        <p className="mt-4 text-center text-gray-700">AI is transforming the world. Learn more about its impact and future.</p>
      </div>
    </div>
  );
};

export default About;