import React from 'react';
import { Link } from 'react-router-dom';
import { FaChartLine, FaBook, FaVideo } from 'react-icons/fa';

const LandingPage = () => {
  return (
    <div>
      <header className="bg-gray-900 text-white p-6">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-3xl font-bold">Welcome to CodeQuest Journey</h1>
          {/* <Link to="/Home" className="text-lg font-semibold hover:underline">Get Started</Link> */}
        </div>
      </header>

      {/* Features Section */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Key Features</h2>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <FaChartLine className="text-4xl text-blue-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold">Track Your Progress</h3>
              <p className="mt-2">Easily save and monitor your problem-solving progress with detailed analytics and reports.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <FaBook className="text-4xl text-green-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold">Study Guides</h3>
              <p className="mt-2">Access comprehensive study materials for Data Structures and Algorithms, curated by experts.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <FaVideo className="text-4xl text-red-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold">Video Tutorials</h3>
              <p className="mt-2">Watch high-quality video tutorials to understand complex concepts with ease.</p>
            </div>
          </div>
          <div className="mt-12">
            <Link to="/Home" className="bg-blue-500 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-blue-600 transition-colors duration-300">
              Start Your Journey
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;