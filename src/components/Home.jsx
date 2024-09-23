import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate('/category'); // Navigate to the category page
  };

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-6">Welcome to CodeQuest Journey</h1>
      <p className="mb-4">Track your DSA progress with categorized questions!</p>
      <button
        onClick={handleGetStarted}
        className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
      >
        Get Started
      </button>
    </div>
  );
};

export default Home;
