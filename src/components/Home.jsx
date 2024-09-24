import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate('/category');
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

      {/* Why Choose Us? Section */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Why Choose Us?</h2>
        <ul className="list-disc list-inside mb-4">
          <li>✅ Comprehensive DSA question bank.</li>
          <li>✅ Progress tracking for each category.</li>
          <li>✅ Ability to mark questions as solved or unsolved.</li>
          <li>✅ User-friendly interface for easy navigation.</li>
        </ul>
      </div>

      {/* Resources Section */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Resources for You</h2>
        <ul className="list-disc list-inside mb-4">
          <li>📚 <a href="/StudyGuides" className="text-blue-500">Study Guides</a></li>
          <li>🎥 <a href="/tutorials" className="text-blue-500">Video Tutorials</a></li>
        </ul>
      </div>

      {/* Upcoming Features Section */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Upcoming Features</h2>
        <ul className="list-disc list-inside mb-4">
          <li>📱 Mobile App Launch</li>
          <li>🔄 New Categories of Questions</li>
          <li>💡 Enhanced Analytics Dashboard</li>
        </ul>
      </div>

      {/*Newsletter Subscription*/}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Stay Updated</h2>
        <p className="mb-4">Subscribe to our newsletter for tips and updates!</p>
        <input
          type="email"
          placeholder="Enter your email"
          className="border border-gray-300 p-2 rounded-md"
        />
        <button className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 ml-2">
          Subscribe
        </button>
      </div>
    </div>
  );
};

export default Home;
